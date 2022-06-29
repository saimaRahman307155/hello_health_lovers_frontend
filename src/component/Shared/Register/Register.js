import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Container, CircularProgress, Alert } from '@mui/material';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo2.png';
import './Register.css';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, authError, isloading, registerUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleRegisterSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, location, navigate);
        console.log(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <div>
            <div className='register-flex'>
                <div className='vertical-center'>
                    <img className='register-logo' src={logo} alt="" />
                </div>
                <div className='div-height'>
                    <Container>
                        <Box sx={{ mx: 5, my: 5 }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'blue' }}>Please Register...</Typography>
                            {!isloading && <form onSubmit={handleRegisterSubmit}>
                                <TextField
                                    sx={{ width: '75%' }}
                                    id="standard-basic"
                                    label="Enter your name"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%' }}
                                    id="standard-basic"
                                    label="Enter your email"
                                    name="email"
                                    type="email"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <br />
                                <TextField
                                    sx={{ width: '75%' }}
                                    id="standard-basic"
                                    label="Enter your new password"
                                    name="password"
                                    type="password"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%' }}
                                    id="standard-basic"
                                    label="ReType your password"
                                    name="password2"
                                    type="password"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/login">
                                    <Button type="submit" variant="text" sx={{ width: '75%', m: 1 }}>Already have a account? Please Login</Button>
                                </NavLink>
                                <Button type="submit" variant="contained" sx={{ width: '75%', m: 1 }}>Register</Button>

                            </form>}
                            {isloading && <CircularProgress />}
                            {user?.email && <Alert severity="success">Register successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </Box>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default Register;