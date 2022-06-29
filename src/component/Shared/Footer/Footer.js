import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../../../images/logo2.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-grid'>
                <div className='vertical-center'>
                    <img className='footer-img' src={logo} alt="" />
                </div>
                <div className='vertical-center'>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>Hello Health Lovers</Typography>
                </div>
                <div className='vertical-center'>
                    <div>
                        <div>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'white' }}>Mobile Number: </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'white' }}>8801715000009 </Typography>
                        </div>
                        <div>
                            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'white' }}>Address: </Typography>
                            <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'white' }}>Khulna, Bangladesh</Typography>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;