import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function JoinClass() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button style={{color:"white" , backgroundColor:"#0984e3", marginRight:"20px"}}onClick={handleOpen}>Join a Class </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <h3 >SEARCH HERE</h3><br></br>
        <h4>Enter Class Code</h4>
        <p>Ask your teacher for class code</p>
        <TextField label="Class Code"  focused />
        
        <h4>Enter Teacher Name</h4>
        <br/>
        
        <TextField label="Teacher Name"  focused />
        <div>
        <Button style={{marginTop:"10px"}}variant="contained">Join </Button>
        </div>

          
        </Box>
       
      </Modal>
    </div>
  );
}