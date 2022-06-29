import React from 'react';
import Typography from '@mui/material/Typography';
import about from '../../../../images/Person Image.png';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className='bgBanner'>
            {/* <Container sx={{ flexGrow: 1 }} > */}
            <div className='about-flex'>
                <div className='verticalCenter'>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <img src={about} alt="" srcset="" className='aboutImage' /></div>
                </div>
                <div className='verticalCenter'>
                    <div className='text-gap'>
                        <Typography id="aboutme-text" variant="h3" sx={{ fontWeight: '600', color: "blue" }}>
                            About Me</Typography>
                        <Typography id="subtitle" variant="subtitle1" sx={{ fontWeight: '600', color: "#575757" }}>I am a dedicated and enthusiastic young nutritionist and a chef. Your nutritionist will guide you toward healthy food choices while helping you enjoy the foods you are eating.</Typography>

                    </div>
                </div>
            </div>
            {/* </Container> */}
        </div>
    );
};

export default AboutMe;