import { useState, useRef, useMemo } from 'react'
import { Box, TextField, FormControlLabel, Button, IconButton, Typography, Chip, Stack, Checkbox } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { flexColumn, metodoPago, title, CAT_SAT_FORMAPAGO, DATE_BEUTY } from '../utils/CONST'
import Selector from '../Components/Selector'
import GenericModal from '../Components/modals/GenericModal'
import { getAllDataFromXML, getPDF } from '../utils/toolbox'
import { toast } from 'react-toastify'
import { schemaValeAzul, schemaDeducible, schemaDate } from '../utils/SCHEMAS'
import fetcher from '../context/fetcher'
import { addFile } from '../context/firebase'
import ModalConfirm from '../Components/Rembolsos/ModalConfirm'
import DatosComprobante from '../Components/Rembolsos/DatosComprobante'
const stack = { border: '1px solid #1e70ff', padding: '10px', borderRadius: '4px' }
const obras = ['BERSHKA PLAYA DE CARMEN']

const CreateRembolso = () => {
  const formRef = useRef()
  const [comprobantes, setComprobantes] = useState([])
  console.log('🚀 ~ file: CreateRembolso.jsx:20 ~ CreateRembolso ~ comprobantes', comprobantes)
  const [deducibleState, setDeducibleState] = useState(true)
  const [errors, setErrors] = useState({})

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const { initialDate, finalDate, xml, pdf, ...restOfParams } = Object.fromEntries(formData)

    // TODO GUARDAR EL PDF Y EL XML EN FIREBASE
    try {
      if (deducibleState) {
        const { blob: pdfBlob, URLpreview } = await getPDF(pdf)
        const isValid = schemaDeducible.safeParse(restOfParams)
        if (!isValid.success) {
          return Object.entries(isValid.error.issues).forEach(([key, value]) => {
            setErrors((prev) => ({ ...prev, [value.path.toString()]: value.message }))
          })
        }
        const {
          blob: xmlBlob,
          total, subtotal,
          impuestos,
          folio,
          serie,
          emisor: proovedor,
          fecha: facturaDate,
          formaPago,
          uuid
        } = await getAllDataFromXML(xml)

        const isDuplicate = comprobantes.some((item) => item.uuid === uuid)
        if (isDuplicate) {
          return toast.error('El comprobante ya fue agregado')
        }

        const rembolso = {
          ...restOfParams,
          uuid,
          internalId: crypto.randomUUID() + '&' + new Date().getTime(),
          total,
          subtotal,
          impuestos,
          facturaFolio: `${serie} - ${folio}`,
          proovedor,
          facturaDate: DATE_BEUTY(facturaDate),
          metodoPago: CAT_SAT_FORMAPAGO[formaPago],
          pdf: URLpreview,
          pdfBlob,
          xmlBlob
        }
        setComprobantes((prev) => [...prev, rembolso])
        setErrors({})
      } else {
        const isValid = schemaValeAzul.safeParse(restOfParams)
        if (!isValid.success) {
          return Object.entries(isValid.error.issues).forEach(([key, value]) => {
            setErrors((prev) => ({ ...prev, [value.path.toString()]: value.message }))
          })
        }
        const rembolso = {
          internalId: crypto.randomUUID(),
          ...restOfParams
        }
        setComprobantes((prev) => [...prev, rembolso])
        setErrors({})
      }
    } catch (error) {
      console.log('🚀 ~ file: CreateRembolso.jsx:30 ~ onSubmitHandler ~ error', error)
      return toast.error(error.message)
    }
    formRef.current.reset()
  }

  const deleteRembolso = (internalId) => {
    setComprobantes((prev) => prev.filter((item) => item.internalId !== internalId))
  }

  const [openComprobante, setOpenComprobante] = useState({ open: false, comprobante: {} })
  console.log('🚀 ~ file: CreateRembolso.jsx:96 ~ CreateRembolso ~ openComprobante', openComprobante)
  const onCloseComprobante = () => {
    setOpenComprobante({ open: false, comprobante: [] })
  }

  const saveRembolso = async () => {
    const form = new FormData(formRef.current)
    const { initialDate, finalDate } = Object.fromEntries(form)

    const isValid = schemaDate.safeParse({ initialDate, finalDate })
    if (!isValid.success) {
      toast.error('Debes seleccionar las fechas de inicio y fin')
      return Object.entries(isValid.error.issues).forEach(([key, value]) => {
        setErrors((prev) => ({ ...prev, [value.path.toString()]: value.message }))
      })
    }

    if (comprobantes.length === 0) {
      return toast.error('No hay comprobantes para guardar')
    }

    setModalConfirm({ open: true })
  }

  const [uploadDocument, setUploadDocument] = useState(false)
  const [saveData, setSaveData] = useState(false)
  const onConfirmSave = async () => {
    const form = new FormData(formRef.current)
    const { initialDate, finalDate } = Object.fromEntries(form)
    try {
      // guardar comprobantes en firebase
      // y guardar el rembolso en firebase // SE GUARDA EN EL BACKEND
      setUploadDocument(true)
      const reembolsosMap = comprobantes.map(async (item) => {
        const pdfUrl = await addFile(item.pdfBlob, item.internalId, `${item.uuid}.pdf`)
        const xmlUlr = await addFile(item.xmlBlob, item.internalId, `${item.uuid}.xml`)
        const { pdfBlob, xmlBlob, ...restOfParams } = item
        return {
          ...restOfParams,
          pdf: pdfUrl,
          xml: xmlUlr
        }
      })

      const addFileResponse = await Promise.all(reembolsosMap)
      setSaveData(true)
      setUploadDocument(false)
      if (addFileResponse.length > 0) {
        await fetcher({
          query: '/api/saveReembolsoPeriodo',
          variables: {
            reembolso: {
              owner: 'Carlos',
              initialDate,
              finalDate,
              comprobantes: addFileResponse
            }
          }
        }).then(response => {
          if (response) {
            toast.success('Reembolso guardado correctamente')
            setComprobantes([])
            formRef.current.reset()
            setModalConfirm({ open: false })
          }
        })
      }
    } catch (error) {
      console.log('🚀 ~ file: CreateRembolso.jsx:144 ~ onConfirmSave ~ error', error)
    }
  }

  const onClickComprobante = useMemo(() => {
    return (
        <GenericModal
            title='Datos del comprobante'
            open={openComprobante.open}
            handleClose={onCloseComprobante}>
          <DatosComprobante openComprobante={openComprobante} />
        </GenericModal>
    )
  }, [openComprobante])

  const [modalConfirm, setModalConfirm] = useState({ open: false })
  const onCloseConfirm = () => {
    setModalConfirm({ open: false })
  }
  const ModalConfirmComponent = () => {
    return (
        <GenericModal
            title='¿Estas seguro de guardar el reembolso?'
            open={modalConfirm.open}
            handleClose={onCloseConfirm}
            confirmAction={
              <Button
                variant='contained'
                color='success'
                onClick={onConfirmSave}
              >
                Guardar
              </Button>
            }
            >
          <ModalConfirm
            comprobantes={comprobantes}
            uploadDocument={uploadDocument}
            saveData={saveData}
            />
        </GenericModal>
    )
  }

  return (
        <div>
            { onClickComprobante }
            <ModalConfirmComponent />
            <Box sx={{ ...flexColumn, minWidth: '50vw' }}>
                <h1>Crear Reembolso</h1>
                <form className='formStyles' onSubmit={onSubmitHandler} ref={formRef}>
                    <Stack direction="column" justifyContent='center' sx={{ ...stack, alignItems: 'center', gap: '20px' }}>
                      <Typography variant="h5" sx={{ ...title }}>Elige un periodo</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                          <FormControlLabel
                              labelPlacement='top'
                              control={<TextField
                                type="date"
                                name="initialDate"
                                fullWidth
                                error={!!errors.initialDate}
                                />}
                              label="Fecha de inicio reembolso"
                          />
                          <FormControlLabel
                              labelPlacement='top'
                              control={<TextField
                                type="date"
                                name="finalDate"
                                fullWidth
                                error={!!errors.finalDate}
                                />}
                              label="Fecha de final reembolso"
                          />
                          <Stack>
                              <Button
                                onClick={saveRembolso}
                                type="button"
                                variant="contained"
                                color="primary">
                                  Guardar
                              </Button>
                          </Stack>
                        </Box>
                    </Stack>
                    <Stack sx={{ minHeight: '80px', backgroundColor: '#f2f2f2', margin: '20px 0', padding: '20px 0' }}>
                        <Box sx={{ ...flexColumn, gap: '12px' }}>
                            <Typography variant="h6" component="div">
                                { comprobantes.length > 0 ? 'Comprobantes añadidos' : '🗃️'}
                        </Typography>
                        <Stack direction="row" sx={{ gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
                          {
                            comprobantes.length > 0 &&
                            comprobantes.map((item, index) => {
                              return (
                                  <Chip
                                      key={index}
                                      sx={{ borderRadius: '4px', width: '120px' }}
                                      color="info"
                                      label={item.facturaFolio}
                                      onDelete={() => deleteRembolso(item.internalId)}
                                      onClick={() => setOpenComprobante({ open: true, comprobante: item })}
                                  />
                              )
                            })
                          }
                        </Stack>
                        </Box>
                    </Stack>
                <Typography variant="h5" component="div" sx={{ ...title }}>
                    Agregar comprobantes
                </Typography>
                  <Box sx={{ border: '2px solid #0288d1', borderRadius: '4px', padding: '0 10px', width: '100%' }}>
                      <Stack justifyContent="center" direction="row"
                        sx={{ margin: '20px', display: 'flex', gap: '12px', backgroundColor: '#f2f2f2', padding: '1rem' }}>
                          <FormControlLabel
                            control={<Checkbox checked={deducibleState}
                            onChange={() => setDeducibleState(!deducibleState)} />}
                            label="Deducible"
                          />
                      </Stack>
                      <Stack sx={{ margin: '20px', display: 'flex', gap: '12px' }}>
                        { !deducibleState && (
                        <TextField
                          error={errors.proveedor}
                          type="text"
                          name="proveedor"
                          fullWidth
                          label="Nombre del Proveedor"
                        />
                        ) }
                        <TextField
                          type="text"
                          name="concepto"
                          fullWidth
                          label="Agrega el concepto del gasto"
                          error={errors.concepto}
                        />
                        <Selector
                          data={obras}
                          label="obra"
                          name="obra"
                          fullWidth
                          error={errors.concepto}
                        />
                      </Stack>
                      <Stack direction="row" sx={{ margin: '20px', display: 'flex', gap: '12px', justifyContent: 'space-between' }}>
                          {
                            !deducibleState && (
                          <>
                            <TextField type="text" name="facturaFolio" label="Número de nota" error={errors.facturaFolio}/>
                            <FormControlLabel
                              labelPlacement='bottom'
                              control={<TextField type="date" name="facturaDate" error={errors.facturaDate} />}
                              label="Fecha de la nota"
                            />
                            <Selector
                              data={metodoPago} l
                              abel="Metódo pago"
                              name="metodoPago"
                              fullWidth
                              error={errors.metodoPago}
                              sx={{ width: '200px' }}
                            />
                          </>
                            )
                          }
                      </Stack>
                      {
                          !deducibleState
                            ? (
                            <Stack direction="row" sx={{ margin: '20px', display: 'flex', gap: '12px' }}>
                              <TextField type="text" name="subtotal" fullWidth label="Subtotal" error={errors.subtotal}/>
                              <TextField type="text" name="impuestos" fullWidth label="Impuestos" error={errors.impuestos}/>
                              <TextField type="text" name="otroimpuesto" value="0" fullWidth label="Otro" error={errors.otroimpuesto}/>
                              <TextField type="text" name="total" fullWidth label="Total" error={errors.total}/>
                            </Stack>
                              )
                            : (
                              <Stack direction="column" sx={{ margin: '20px', display: 'flex', gap: '12px' }}>
                                <label>XML</label>
                                <TextField variant='standard' type="file" name="xml" fullWidth label="XML" onChange={(e) => {
                                  if (e.target.files[0].type !== 'text/xml') {
                                    toast.error('El archivo no es un XML')
                                    e.target.value = ''
                                  }
                                }}/>
                                <label>PDF</label>
                                <TextField variant='standard' type="file" name="pdf" fullWidth label="PDF" onChange={(e) => {
                                  if (e.target.files[0].type !== 'application/pdf') {
                                    toast.error('El archivo no es un PDF')
                                    e.target.value = ''
                                  }
                                }}/>
                            </Stack>
                              )
                      }
                      <Stack direction="row" sx={{ margin: '20px', gap: '12px', justifyContent: 'center' }}>
                      <IconButton type="submit" sx={{ backgroundColor: '#0288d1', width: '60px', color: '#ffff', height: '60px' }}>
                          <AddIcon />
                      </IconButton>
                      </Stack>
                  </Box>
                </form>
            </Box>
        </div>
  )
}

export default CreateRembolso
