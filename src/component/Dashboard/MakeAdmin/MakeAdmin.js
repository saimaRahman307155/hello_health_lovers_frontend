import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Container , Alert} from '@mui/material';
import Typography from '@mui/material/Typography';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e =>{
        const user = {email};
        fetch('http://localhost:5000/users/admin',{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
                setEmail(data);
                setSuccess(true);
            if(data.modifiedCount){
                
            }
        })
        e.preventDefault()
    }
    return (
        <div>
            <Container>
            <Box sx={{mx:5, my:5}}>
                <Typography variant ="h4" sx={{fontWeight:'bold', color:'blue'}}>Add New Admin...</Typography>
                <form onSubmit={handleMakeAdmin}>
                <TextField 
                sx={{width:'75%'}} 
                label="Make Admin" 
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard" />
                <Button type="submit" variant="contained" sx={{width: '25%'}}>Added</Button>
                </form>
                {success && <Alert severity="success">Admin added successfully!</Alert>}
              
            </Box>
        </Container>
        </div>
    );
};

export default MakeAdmin;