import React from 'react';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './Header.css';
import toppic from "../../../../images/top-image.png";

const Header = () => {
    return (
        <div className='bg'>
            {/* <Container sx={{ flexGrow: 1 }}> */}
            <div className='flex'>
                <div className="verticalCenter">
                    <Box>
                        <Typography id="header-text" variant="h3" sx={{ fontWeight: '600', color: "#575757" }}>
                            <span style={{ color: "red" }}>Don't</span> Skip !!!<br />
                            Let Start Again... <br />
                            Diet And Exercise
                        </Typography>
                    </Box>
                </div>
                <div>
                    <img src={toppic} alt="" srcset="" className='headerPic' />
                </div>
            </div>
            {/* </Container> */}
        </div>
    );
};

export default Header;