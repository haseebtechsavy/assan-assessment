import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Home from '../components/Home';
import { homeObjOne } from '../components/Home/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const HomeComp = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <Home {...homeObjOne}/>
            <Services />
            <Footer />
        </>
    );
};

export default HomeComp;