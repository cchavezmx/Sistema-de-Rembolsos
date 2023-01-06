import { Box } from '@mui/material'
import { GastosChart } from '../Components/Charts/GastosChart'

const HomeDashboard = () => {
  return (
    <Box sx={{ margin: '2rem 0', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <Box sx={{ margin: '4rem 0' }}>
        <GastosChart />
      </Box>
    </Box>
  )
}

export default HomeDashboard
