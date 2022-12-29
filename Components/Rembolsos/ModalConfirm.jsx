import { Box, Chip, Stack, Typography } from '@mui/material'

const ModalConfirm = ({ comprobantes = [], uploadDocument, saveData }) => {
  const messagesLoading = () => {
    if (uploadDocument) {
      return (
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%'
        }}>
          <Typography variant='h5' sx={{ width: '250px' }}>
            Estamos guardado los archivos, No cierres la ventana
          </Typography>
          <span className='loader'></span>
        </Box>
      )
    } else if (saveData) {
      return (
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          width: '100%'
        }}>
          <Typography variant='h5' sx={{ width: '250px' }}>
            Enviando información, No cierres la ventana
          </Typography>
          <span className='loader'></span>
        </Box>
      )
    } else {
      return (
      <Box>
        <Typography variant='h4' sx={{
          marginBottom: '20px',
          textAlign: 'center'
        }}>
          Una vez guardado no se podrá modificar
        </Typography>
        <Typography variant='h5' fontWeight={600} marginTop="20px">
          No te preocupes si te hizo falta algún comprobante puedes agregarlo generando otro período de rembolso
        </Typography>
        <Stack textAlign="center" sx={{ marginBottom: '10px' }}>
          <Typography variant='h5'>
            Comprobantes agregados
          </Typography>
        </Stack>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {
            comprobantes.length > 0 &&
            comprobantes.map((comprobante) => (
              <Chip
                key={comprobante.uuid}
                sx={{ borderRadius: '4px', width: '120px' }}
                color="info"
                label={comprobante.facturaFolio}
              />
            ))
          }
        </Box>
      </Box>
      )
    }
  }

  return (
    <>
      { messagesLoading() }
    </>
  )
}

export default ModalConfirm
