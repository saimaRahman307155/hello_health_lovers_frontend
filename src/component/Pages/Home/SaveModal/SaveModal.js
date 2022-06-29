import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useAuth from '../../../../hooks/useAuth'

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

const SaveModal = ({ openbooking, handleBookingClose }) => {
  const { user } = useAuth();
  const [name, setName] = useState(user.displayName);
  const [email, setEmail] = useState(user.email);
  const [value, setValue] = useState('');
  const [bmiStatus, setBmiStatus] = useState('');
  const date = new Date().toDateString();
  console.log(date);
  const handleBookSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('value', value);
    formData.append('bmiStatus', bmiStatus);
    formData.append('date', date);
    fetch('http://localhost:5000/savebmi', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        //setSaveBMI(true);
        handleBookingClose();
      });
    e.preventDefault();
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openbooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openbooking}>
          <Box sx={style}>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form onSubmit={handleBookSubmit}>
                <TextField
                  sx={{ width: '90%', m: '1' }}
                  defaultValue={user.displayName}
                  id="outlined-size-small"
                  name="name"
                  onChange={e => setName(e.target.value)}
                  size="small"
                />
                <TextField
                  sx={{ width: '90%', m: '1' }}
                  defaultValue={user.email}
                  id="outlined-size-small"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  size="small"
                />
                <TextField
                  sx={{ width: '90%', m: '1' }}
                  id="outlined-size-small"
                  name="value"
                  label="Please Write Your BMI Value"
                  onChange={e => setValue(e.target.value)}
                  size="small"
                />
                <TextField
                  sx={{ width: '90%', m: '1' }}
                  id="outlined-size-small"
                  name="bmiStatus"
                  label="Please Write Your BMI Status"
                  onChange={e => setBmiStatus(e.target.value)}
                  size="small"
                />
                <Button type="submit" sx={{ width: '100%', mt: 2, backgroundColor: "#e6816d", color: "white" }}>Save</Button>
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default SaveModal;