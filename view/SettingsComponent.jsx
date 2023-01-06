import { useState } from 'react'
import { Box, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import Image from 'next/image'
import Obras from '../Components/Configuracion/Obras'

const SettingsComponent = () => {
  const [panel, setPanel] = useState('1')

  const handleChange = (event, newValue) => {
    setPanel(newValue)
  }

  return (
    <Box sx={{ width: '70vw' }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '1rem',
        borderRadius: '1rem',
        gap: '1rem',
        backgroundColor: '#f2f2f2',
        marginBottom: '1rem'
      }}>
        <Image src="/assets/profile.png" alt="Logo" width={100} height={100} className="imagenes-avatar" />
        <Box>
          <h1>Configuración</h1>
          <div>cchavezmx@outlook.com</div>
        </Box>
      </Box>
      <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={panel}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Obras" value="1" />
            <Tab label="Personas" value="2" />
            {/* <Tab label="" value="3" />  */}
          </TabList>
        </Box>
        <TabPanel value="1">
          <Obras />
        </TabPanel>
        <TabPanel value="2">
          PERSONAS
        </TabPanel>
        {/* <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
      </TabContext>
    </Box>
    </Box>
  )
}

export default SettingsComponent
