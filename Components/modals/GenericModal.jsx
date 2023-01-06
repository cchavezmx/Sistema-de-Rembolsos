import { forwardRef } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'

const Transition = forwardRef(function Transition (props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function GenericModal ({ open, handleClose, children, title, confirmAction, sx }) {
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{ '& .MuiDialog-paper': { width: '100vw', height: '500px', overflow: 'hidden', ...sx } }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap'
        }}>
          { children }
        </DialogContent>
        <DialogActions sx={{ backgroundColor: '#f8f8f8' }}>
          <Button variant='contained' onClick={handleClose}>Cerrar</Button>
          { confirmAction && confirmAction }
        </DialogActions>
      </Dialog>
    </div>
  )
}
