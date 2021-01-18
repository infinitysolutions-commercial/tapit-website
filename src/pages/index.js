import React, { useState } from 'react';
import MainSidebar  from '../components/Sidebar';
import MainNavbar from "../components/NavBar";
import MainHeroSection from "../components/HeroSection";
import MainInfoSection from "../components/InfoSection";
import { homeObjOne, homeObjThree, homeObjTwo } from "../components/InfoSection/Data";
import MainServices from "../components/Projects";
import MainFooter from "../components/FooterSection";

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <MainSidebar isOpen={isOpen} toggle={toggle}/>
            
            <MainNavbar toggle={toggle}/>
            <MainHeroSection />
            <MainInfoSection {...homeObjOne}/>
            <MainInfoSection {...homeObjTwo}/>
            <MainServices />
            <MainInfoSection {...homeObjThree}/>
            <MainFooter />
        </>
    );
};

export default Home;