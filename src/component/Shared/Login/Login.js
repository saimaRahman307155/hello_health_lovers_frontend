import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useFirebase from '../../../hooks/useFirebase';
import { Button } from '@mui/material';
import { NavLink, useLocation, useNavigate} from 'react-router-dom';
import { Container ,CircularProgress, Alert} from '@mui/material';
import Typography from '@mui/material/Typography';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user,authError,isloading,loginUser} = useFirebase();

    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        console.log(field,value);
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e =>{
        //alert('hello');
        loginUser(loginData.email, loginData.password, location, navigate);
        console.log(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container>
            <Box sx={{mx:5, my:5}}>
                <Typography variant ="h4" sx={{fontWeight:'bold', color:'blue'}}>Please Login...</Typography>
                <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width:'75%'}}
                id="standard-basic" 
                label="Enter your email" 
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard" />
                <br />
                <TextField 
                sx={{width:'75%'}}
                id="standard-basic" 
                label="Enter your password" 
                name="password"
                type="password"
                onBlur={handleOnBlur}
                variant="standard" />
                <NavLink 
                    style={{textDecoration: 'none'}}
                    to="/register">
                    <Button type="submit" variant="text" sx={{width: '75%', m: 1}}>New User? Please Register</Button>
                </NavLink>
                    <Button type="submit" variant="contained" sx={{width: '75%', m: 1}}>Login</Button>
                    {isloading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Login successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </form>
            </Box>
        </Container>
    );
};

export default Login;