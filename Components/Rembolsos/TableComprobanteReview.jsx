import { TextField, Box, Button } from '@mui/material'

const TableComprobanteReview = ({ data }) => {
  console.log('🚀 ~ file: TableComprobanteReview.jsx:4 ~ TableComprobanteReview ~ data', data)
  const { comprobantes } = data || {}
  return (
    <>
        {
          Array.isArray(comprobantes) && comprobantes.map((comprobante) => {
            return Object.entries(comprobante).map(([key, value]) => {
              const noShow = ['pdf', 'facturaFolio', 'concepto', 'total']
              if (!noShow.includes(key)) return null
              return (
                <Box key={key} >
                  {
                    key === 'pdf'
                      ? (
                      <div className="tableReview">
                      <Button
                      sx={{ width: '100%', marginBottom: '10px' }}
                      variant='contained'
                      onClick={() => {
                        if (window !== undefined) {
                          window.open(value)
                        }
                      }}>
                        Ver PDF
                      </Button>
                      </div>
                        )
                      : (
                        <TextField
                          key={key}
                          fullWidth
                          label={key?.toUpperCase()}
                          value={value}
                          variant='outlined'
                          sx={{ width: '100%', marginBottom: '10px' }}
                        />
                        )
                  }
                </Box>
              )
            })
          })
        }
    </>
  )
}

export default TableComprobanteReview
