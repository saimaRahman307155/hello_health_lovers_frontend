import React, { useState } from 'react';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import "./Bmi.css";
import SaveModal from '../SaveModal/SaveModal';

const BMI = () => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmiResult, setBmiResult] = useState(null);
    const [status, setStatus] = useState("");
    const [openbooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => { setBookingOpen(true); };
    const handleBookingClose = () => { setBookingOpen(false); };

    const HandlecalculateBMI = e => {
        e.preventDefault();
        let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
        setBmiResult(bmi);
        let bmiStatus = getStatus(bmi);
        setStatus(bmiStatus);
        setHeight("");
        setWeight("");
    };
    const getStatus = bmi => {
        if (bmi < 18.5) return <a href="https://drive.google.com/file/d/1MIe6GccQbPYLIVH9ah_FG5ufyEpaKSns/view?usp=sharing" download target="_blank" style={{ textDecoration: "none" }}>Underweight</a>;
        else if (bmi >= 18.5 && bmi < 24.9) return <a href='https://drive.google.com/file/d/1JI9fS9hqyx4CtJ60db-hEykLS1zBdALu/view?usp=sharing' download target="_blank" style={{ textDecoration: "none" }}>Normal</a>;
        else if (bmi >= 25 && bmi < 29.9) return <a href="https://drive.google.com/file/d/14mvgtt9N4repQBtxoHbbMYn8k2ym32xe/view?usp=sharing" download target="_blank" style={{ textDecoration: "none" }}>Overweight</a>;
        else return <a href="https://drive.google.com/file/d/14mvgtt9N4repQBtxoHbbMYn8k2ym32xe/view?usp=sharing" download target="_blank" style={{ textDecoration: "none" }}>Obese</a>;
    }

    return (
        <div className="BMIBanner">
            <Container >
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ padding: "30px" }}>
                    <Grid xs={12} sm={4} md={4}>
                    </Grid>
                    <Grid xs={12} sm={4} md={4} sx={{ p: 5, boxShadow: 3 }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#e6816d', textAlign: 'center' }}> BMI Calculator</Typography>
                        <Box>
                            <form onSubmit={HandlecalculateBMI}>
                                <TextField
                                    sx={{ width: '100%', mt: 4 }}
                                    required
                                    label="Enter your Height in cm"
                                    name="height"
                                    type="number"
                                    onBlur={e => setHeight(e.target.value)}
                                    variant="outlined" /> <br />
                                <TextField
                                    sx={{ width: '100%', mt: 2 }}
                                    required
                                    label="Enter your Weight in kg"
                                    name="weight"
                                    type="number"
                                    onBlur={e => setWeight(e.target.value)}
                                    variant="outlined" /> <br />
                                <Button type="submit" sx={{ width: '100%', mt: 2, backgroundColor: "#e6816d", color: "white" }}>Calculate BMI</Button>
                                {bmiResult && <Box sx={{ m: 3 }}>
                                    <Typography variant="h6" sx={{ mt: 1 }}> Your BMI is: {bmiResult}</Typography>
                                    <Typography variant="h6" sx={{ mt: 1 }}>
                                        You are currently: {status}
                                    </Typography>
                                    <Button onClick={handleBookingOpen} sx={{ width: '100%', mt: 2, color: "#e6816d" }}>Are You Want To Save Your BMI Status?</Button>
                                </Box>
                                }
                            </form>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={4} md={4}>
                    </Grid>
                </Grid>
                <SaveModal
                    openbooking={openbooking}
                    handleBookingClose={handleBookingClose}
                ></SaveModal>
            </Container>
        </div>
    );
};

export default BMI;