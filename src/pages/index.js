import React, { useState } from 'react';
import Sidebar  from '../components/main/Sidebar';
import Navbar from "../components/main/NavBar";
import HeroSection from "../components/main/HeroSection";
import InfoSection from "../components/main/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/main/InfoSection/Data";
import Services from "../components/main/Services";
import Footer from "../components/main/Footer";

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>
            <Footer />
        </>
    );
}

export default Home;