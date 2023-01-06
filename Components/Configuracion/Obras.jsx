import { useState } from 'react'
import { Box, TextField, Autocomplete, Button, Divider, Stack, Typography } from '@mui/material'
import ModalNewObra from './ModalNewObra'
import GenericModal from '../modals/GenericModal'

const obras = ['BERSHKA PLAYA DE CARMEN']

const Obras = () => {
  const [obra, setObra] = useState(null)
  console.log('🚀 ~ file: Obras.jsx:7 ~ Obras ~ obra', obra)
  const [newObra, setNewObra] = useState(false)
  const handledCloseModal = () => setNewObra(false)

  const [editObra, setEditObra] = useState(false)
  const handledCloseModalEdit = () => setEditObra(false)

  const [deleteObra, setDeleteObra] = useState(false)
  const handledCloseModalDelete = () => setDeleteObra(false)

  const NewObra = () => {
    return (
      <GenericModal
      open={newObra}
      setOpen={setNewObra}
      handleClose={handledCloseModal}
      confirmAction={<Button variant='contained' onClick={handledCloseModal}>Agregar</Button>}
      title="Agregar nueva obra">
      <ModalNewObra />
    </GenericModal>
    )
  }

  const EditObra = () => {
    return (
      <GenericModal
      open={editObra}
      setOpen={setEditObra}
      handleClose={handledCloseModalEdit}
      confirmAction={<Button variant='contained' color="success" onClick={handledCloseModalEdit}>Guardar</Button>}
      title="Editar obra">
      <Box sx={{ width: '100%', padding: '4rem' }}>
        <form>
          <TextField
            fullWidth
            id="name_obra"
            label="Nombre de la obra"
            variant="outlined"
            helperText="Evitar usar acentos y caracteres especiales"
            value={obra}
          />
        </form>
      </Box>
    </GenericModal>
    )
  }

  const DeleteObra = () => {
    return (
      <GenericModal
      open={deleteObra}
      setOpen={setDeleteObra}
      handleClose={handledCloseModalDelete}
      confirmAction={<Button variant='contained' color="error" onClick={handledCloseModalDelete}>Eliminar</Button>}
      title="Eliminar obra">
      <Box sx={{ display: 'grid', placeContent: 'center', textAlign: 'center' }}>
        <Typography variant='h6'>¿Estás seguro de eliminar la obra {obra}?</Typography>
      </Box>
    </GenericModal>
    )
  }

  return (
    <Box>
      <NewObra />
      <EditObra />
      <DeleteObra />
      <h1>Obras</h1>
      <p>
        En esta sección podrás agregar, editar y eliminar obras, que estarán disponibles para los usuarios.
      </p>
      <Box sx={{ marginTop: '2rem' }}>
        <Autocomplete
          disablePortal
          id="obra"
          options={obras}
          sx={{ width: 600 }}
          onChange={(event, newValue) => {
            setObra(newValue)
          }}
          renderInput={(params) => <TextField {...params} label="Obras disponibles" />}
        />
      </Box>
      <Box sx={{ marginTop: '2rem', backgroundColor: '#f2f2f2', padding: '2rem' }}>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <div style={{ display: 'flex', gap: '10px' }}>
            {
              obra && (
                <>
                  <Button variant="contained" onClick={() => setEditObra(true)}>Editar</Button>
                  <Button variant="contained" onClick={() => setDeleteObra(true)} >Eliminar</Button>
                </>
              )
            }
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <Divider orientation="vertical" flexItem />
            <Button variant="contained" color="success" onClick={() => {
              setNewObra(true)
            }}>Agregar</Button>
          </div>
        </Stack>
      </Box>
    </Box>

  )
}

export default Obras
