import React from 'react';
import Navbar from '../../../Shared/Navbar/Navbar';
import Header from '../Header/Header';
import BMI from '../BMI/BMI';
import Footer from '../../../Shared/Footer/Footer';
import Moto from '../Moto/Moto';
import AboutMe from '../AboutMe/AboutMe';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <AboutMe></AboutMe>
            <BMI></BMI>
            <Moto></Moto>
            <Footer></Footer>
        </div>
    );
};

export default Home;