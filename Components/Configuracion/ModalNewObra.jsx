import { Box, TextField } from '@mui/material'

const ModalNewObra = () => {
  return (
    <Box sx={{ width: '100%' }}>
        <form style={{ display: 'flex', gap: '20px', flexDirection: 'column' }} id="newModalObra">
          <TextField
            fullWidth
            id="name_obra"
            name='nameObra'
            label="Nombre de la obra"
            variant="outlined"
            helperText="Evitar usar acentos y caracteres especiales"
          />
          <TextField
            fullWidth
            id="presupuesto-rem"
            name="presupuestoRem"
            label="Presupuesto Reembolsos"
            variant="outlined"
            helperText="Presupuesto para reembolsos"
          />
          <TextField
            fullWidth
            id="inicio-obra"
            name="inicioObra"
            label="Fecha de inicio de obra"
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <TextField
            fullWidth
            id="fin-obra"
            name="finEstimatedObra"
            label="Fecha estimada de fin de obra"
            type="date"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
        </form>
    </Box>

  )
}

export default ModalNewObra
