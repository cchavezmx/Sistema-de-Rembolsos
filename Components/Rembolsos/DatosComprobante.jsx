import { TextField, Stack } from '@mui/material'
import { MONY_BEUTY } from '../../utils/CONST'

const DatosComprobante = ({ openComprobante = {} }) => {
  return (
        <>
            {
            openComprobante.comprobante &&
            Object.entries(openComprobante.comprobante).map(([key, value]) => {
              const noShow = ['xmlBlob', 'pdfBlob', 'internalId']
              const mony = ['total', 'subtotal', 'impuestos', 'otroimpuesto']
              if (mony.includes(key)) {
                return (
                  <Stack key={value?.facturaFolio} sx={{ gap: '12px', width: '100%', marginTop: '10px' }}>
                  <TextField
                      key={key}
                      label={key?.toUpperCase()}
                      value={MONY_BEUTY(value)}
                      variant='outlined'
                      sx={{ width: '100%', marginBottom: '10px' }}
                  />
                  </Stack>
                )
              }
              if (key === 'pdf') {
                return (
                  <iframe
                  key={value?.internalId}
                  src={value}
                  width="100%"
                  height="800px"
                  title="PDF Preview"
                />
                )
              }
              if (noShow.includes(key)) return null
              return (
                <Stack key={value?.facturaFolio} sx={{ gap: '12px', width: '100%', marginTop: '10px' }}>
                <TextField
                    key={key}
                    label={key?.toUpperCase()}
                    value={value}
                    variant='outlined'
                    sx={{ width: '100%', marginBottom: '10px' }}
                />
                </Stack>
              )
            })

          }
        </>
  )
}

export default DatosComprobante
