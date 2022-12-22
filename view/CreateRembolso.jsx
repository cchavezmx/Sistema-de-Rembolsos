import { useState, useRef, useMemo } from 'react'
import { Box, TextField, FormControlLabel, Button, IconButton, Typography, Chip } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Stack } from '@mui/system'
import { flexColumn, metodoPago } from '../utils/CONST'
import Selector from '../Components/Selector'
import GenericModal from '../Components/modals/GenericModal'

const stack = { border: '1px solid #1e70ff', padding: '10px', borderRadius: '4px' }
const obras = ['BERSHKA PLAYA DE CARMEN']

const CreateRembolso = () => {
  const formRef = useRef()
  const [comprobantes, setComprobantes] = useState([])

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const { initialDate, finalDate, ...restOfParams } = Object.fromEntries(formData)
    console.log(initialDate, finalDate, restOfParams)
    const rembolso = {
      initialDate,
      finalDate,
      comprobante: restOfParams
    }
    setComprobantes((prev) => [...prev, rembolso])
    formRef.current.reset()
  }

  const [openComprobante, setOpenComprobante] = useState({ open: false, comprobante: {} })
  const onCloseComprobante = () => {
    setOpenComprobante({ open: false, comprobante: [] })
  }
  const onClickComprobante = useMemo(() => {
    return (
        <GenericModal
            title='Datos del comprobante'
            open={openComprobante.open}
            handleClose={onCloseComprobante}
        >
            <Box sx={{ gap: '10px', display: 'flex', marginTop: '30px' }}>
              {
                Object.entries(openComprobante.comprobante).map(([key, value], index) => {
                  if (typeof value === 'object') {
                    return (
                            <Stack key={value?.facturaFolio} sx={{ gap: '12px', width: '100%' }}>
                                {
                                    Object.entries(value).map(([key, value]) => {
                                      return (
                                            <TextField
                                                fullWidth
                                                key={value?.facturaFolio}
                                                defaultValue={value}
                                                label={key.toLocaleUpperCase()}
                                            />
                                      )
                                    })
                                }
                            </Stack>
                    )
                  } else {
                    return <span key={index}></span>
                  }
                })
              }
            </Box>
        </GenericModal>
    )
  }, [openComprobante])

  return (
        <div>
            {onClickComprobante}
            <Box sx={{ ...flexColumn }}>
                <h1>Crear Rembolso</h1>
                <form className='formStyles' onSubmit={onSubmitHandler} ref={formRef}>
                    <Stack direction="row" justifyContent='center' sx={{ ...stack, alignItems: 'center' }}>
                        <FormControlLabel
                            labelPlacement='top'
                            control={<TextField type="date" name="initialDate" fullWidth/>}
                            label="Fecha de inicio reembolso"
                        />
                        <FormControlLabel
                            labelPlacement='top'
                            control={<TextField type="date" name="finalDate" fullWidth/>}
                            label="Fecha de final reembolso"
                        />
                    <Stack sx={{ margin: '20px', display: 'flex', gap: '12px', width: '120px' }}>
                        <Button type="button" variant="contained" color="primary">Enviar</Button>
                    </Stack>
                    </Stack>
                    <Stack sx={{ minHeight: '80px', backgroundColor: '#f2f2f2', margin: '20px 0', padding: '20px 0' }}>
                        <Box sx={{ ...flexColumn, gap: '12px' }}>
                            <Typography variant="h6" component="div">
                                Comprobantes añadidos
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
                                            label={item.comprobante.facturaFolio}
                                            onDelete={() => onCloseComprobante()}
                                            onClick={() => setOpenComprobante({ open: true, comprobante: item })}
                                        />
                                  )
                                })
                            }
                        </Stack>
                        </Box>
                    </Stack>
                    <Typography variant="h5" component="div" sx={{ textAlign: 'center', fontWeight: '800', padding: '10px 0' }}>
                        Agregar comprobantes
                    </Typography>
                <Box sx={{ border: '2px solid #0288d1', borderRadius: '4px' }}>
                    <Stack sx={{ margin: '20px', display: 'flex', gap: '12px' }}>
                        <TextField type="text" name="proveedor" fullWidth label="Nombre del Proveedor"/>
                        <TextField type="text" name="concepto" fullWidth label="Concepto"/>
                        <Selector data={obras} label="Obra" name="obra" fullWidth />
                    </Stack>
                    <Stack direction="row" sx={{ margin: '20px', display: 'flex', gap: '12px', justifyContent: 'space-between' }}>
                        <TextField type="text" name="facturaFolio" label="Numero de factura"/>
                        <FormControlLabel
                            labelPlacement='bottom'
                            control={<TextField type="date" name="facturaDate" />}
                            label="Fecha factura"
                        />
                        <Selector data={metodoPago} label="Metódo pago" name="metodoPago" fullWidth sx={{ width: '250px' }} />
                    </Stack>
                    <Stack direction="row" sx={{ margin: '20px', display: 'flex', gap: '12px' }}>
                        <TextField type="text" name="importe" fullWidth label="Importe"/>
                        <TextField type="text" name="iva" fullWidth label="IVA"/>
                        <TextField type="text" name="otro" fullWidth label="Otro"/>
                        <TextField type="text" name="total" fullWidth label="Total"/>
                    </Stack>
                    <Stack direction="row" sx={{ margin: '20px', display: 'flex', gap: '12px' }}>
                        <label>XML</label>
                        <TextField variant='standard' type="file" name="xml" fullWidth label="XML"/>
                         <label>PDF</label>
                        <TextField variant='standard' type="file" name="pdf" fullWidth label="PDF"/>
                    </Stack>
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
