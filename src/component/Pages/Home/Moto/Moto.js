import React from 'react';
import Typography from '@mui/material/Typography';
import './Moto.css';

const Moto = () => {
    return (
        <div className='motoBanner'>
            <div>
                <Typography id="moto-text" variant="h4" sx={{ fontWeight: 'bold', color: 'rgb(48, 48, 83)', textAlign: 'center', m: 5 }}> “If it was about knowledge, we would all be skinny and rich. It’s not about what you know but what you do!</Typography>
            </div>
        </div>
    );
};

export default Moto;