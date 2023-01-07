import { useState } from 'react'
import { Button, Badge, TextField, Box } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import GenericModal from './modals/GenericModal'

const NotifyReembolso = ({ id }) => {
  console.log('🚀 ~ file: NotifyReembolso.jsx:5 ~ NotifyReembolso ~ id', id)
  const [open, setOpen] = useState(false)
  const commnet = id === '63b5ef60bf62bea796b4cc18' ? 1 : null
  // TODO fetch comments

  const Chat = () => {
    return (
      <GenericModal
        open={open}
        setOpen={setOpen}
        handleClose={() => setOpen(false)}
        title='Comentarios'
        maxWidth='md'
      >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}>
        <div className='chat'>
          <span className='chat-incomming'>
            <p>Tienes un error en la factura A-15A</p>
          </span>
          <span className='chat-outgoing'>
            <p>Ok, lo reviso</p>
          </span>
        </div>

        <form style={{ width: '100px', maring: 0, padding: 0 }}>
          <TextField
            sx={{
              margin: 0,
              padding: 0,
              position: 'absolute',
              bottom: '80px',
              width: '550px'
            }}
            id="outlined-multiline-static"
            defaultValue="Deja un comentario"
            variant="outlined"
          />
        </form>
      </Box>
      </GenericModal>
    )
  }

  return (
    <>
      <Chat />
      <Button onClick={() => setOpen(true)}>
        <Badge badgeContent={commnet} color="primary" fontSize='10px'>
            <MailIcon color="action"/>
        </Badge>
      </Button>
    </>
  )
}

export default NotifyReembolso
