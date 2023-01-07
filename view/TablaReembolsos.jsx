import { useState } from 'react'
import { DataGrid, esES, GridToolbar } from '@mui/x-data-grid'
import { Chip, Box, Typography } from '@mui/material'
import { DATE_BEUTY, MONY_BEUTY } from '../utils/CONST'
import GenericModal from '../Components/modals/GenericModal'
import TableComprobanteReview from '../Components/Rembolsos/TableComprobanteReview'
import NotifyReembolso from '../Components/NotifyReembolso'

const TablaReembolsos = ({ DATA }) => {
  const [openViewComprobantes, setOpenViewComprobantes] = useState({
    open: false,
    comprobantes: []
  })

  const ComprobantesButton = (comprobantes) => {
    console.log('🚀 ~ file: TablaReembolsos.jsx:14 ~ ComprobantesButton ~ comprobantes', comprobantes)
    return (
    <Chip
      label={comprobantes.row.comprobantes.length}
      onClick={() => setOpenViewComprobantes({ open: true, comprobantes: comprobantes.row })}
      sx={{ cursor: 'pointer', width: '100px', borderRadius: '4px', backgroundColor: '#3f51b5', color: '#fff' }}
    />)
  }

  const StatusColors = (status) => {
    const color = () => {
      switch (status) {
        case 'Pendiente':
          return '#3f51b5'
        case 'Rechazado':
          return '#f44336'
        case 'Aprobado':
          return '#4caf50'
        default:
          return '#3f51b5'
      }
    }

    return (
      <Chip
        label={status}
        sx={{ width: '100px', borderRadius: '4px', backgroundColor: color(), color: '#fff' }}
      />
    )
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'initialDate', headerName: 'Fecha inicial', width: 100 },
    { field: 'finalDate', headerName: 'Fecha final', width: 100 },
    { field: 'obra', headerName: 'Obra', width: 220, flex: 2 },
    { field: 'comprobantes', headerName: 'Comprobantes', width: 130, renderCell: (params) => ComprobantesButton(params) },
    { field: 'total', headerName: 'Total', width: 130 },
    { field: 'status', headerName: 'Estatus', width: 130, renderCell: (params) => StatusColors(params.value) },
    { field: 'comentarios', headerName: 'Comentarios', width: 100, height: '80px', renderCell: (params) => NotifyReembolso({ id: params.id }) }
  ]

  const formatRowns = (rows) => {
    return rows.map((item) => {
      return {
        id: item._id.$oid,
        status: item.status,
        initialDate: DATE_BEUTY(item.initialDate),
        finalDate: DATE_BEUTY(item.finalDate),
        comprobantes: item.comprobantes,
        obra: item.comprobantes[0].obra || 'N/A',
        comentarios: item._id,
        total: MONY_BEUTY(item.comprobantes.reduce((acc, curr) => acc + Number(curr.total), 0))
      }
    })
  }

  return (
    <main>
      {/* COMPROBANTE VIEW */}
      <GenericModal
        open={openViewComprobantes.open}
        handleClose={() => setOpenViewComprobantes({ open: false, comprobantes: [] })}>
        <Box sx={{ height: '10vh', width: '100%' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Mis reembolsos
          </Typography>
          <TableComprobanteReview data={openViewComprobantes.comprobantes} />
        </Box>
      </GenericModal>
      {/*  */}
      <Typography variant="h4" component="h1" gutterBottom>
        Mis reembolsos
      </Typography>
      <Box sx={{ height: '70vh', width: '70vw', overflow: 'auto' }}>
        <DataGrid
          localeText={esES.components.MuiDataGrid.defaultProps.localeText}
          rows={formatRowns(DATA)}
          columns={columns}
          pageSize={5}
          experimentalFeatures={{ newEditingApi: true }}
          components={{
            Toolbar: GridToolbar
          }}
        />
      </Box>
    </main>
  )
}

export default TablaReembolsos
