import { Box } from '@mui/material'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  offset: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'GASTOS (Reembolsos)'
    }
  }
}

const labels = ['BERSHKA PLAYA DE CARMEN', 'CAMINO A MICHOACAN']

export const data = {
  labels,
  datasets: [
    {
      label: 'Historico',
      data: [120000, 50000],
      backgroundColor: '#00305c',
      borderWidth: 1
    },
    {
      label: 'Pendiente de pago',
      data: [1200, 5000],
      backgroundColor: '#81b562',
      borderWidth: 1
    }
  ]
}

export function GastosChart () {
  return (
    <Box sx={{
      width: '50vw'
    }}>
        <Bar options={options} data={data} />
    </Box>
  )
}
