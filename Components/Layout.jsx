import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
// import MailIcon from '@mui/icons-material/Mail'
import TableRowsIcon from '@mui/icons-material/TableRows'
import SettingsIcon from '@mui/icons-material/Settings'
import HomeIcon from '@mui/icons-material/Home'
import Link from 'next/link'
import AddCircleIcon from '@mui/icons-material/AddCircle'

const drawerWidth = 200

const menu = [
  { name: 'Inicio', icon: <HomeIcon />, link: '/' },
  { name: 'Reembolso', icon: <AddCircleIcon />, link: '/reembolsos' },
  { name: 'Mis Reembolsos', icon: <TableRowsIcon />, link: '/mis-reembolsos' },
  { name: 'Configuración', icon: <SettingsIcon />, link: '/config' }
]

export default function Layout ({ children }) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Grupo Intecsa / <Typography variant="subtitle1" component="span">Tesoreria</Typography>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {menu.map((item, index) => (
              <ListItem key={item.name + index} disablePadding>
              <Link href={item.link} passHref>
              <ListItemButton>
                <ListItemIcon>
                    {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItemButton>
              </Link>
            </ListItem>
            ))}
          </List>
          <Divider />
          {/* <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Drawer>
      <Box sx={{ display: 'grid', placeContent: 'center', width: '100vw' }}>
       { children }
      </Box>
    </Box>
  )
}
