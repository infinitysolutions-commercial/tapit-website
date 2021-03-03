import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import {
    MobileIcon, Nav, NavbarContainer,
    NavItem, NavLinks, NavLogo, NavMenu
} from "./NavbarElements";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from 'react-scroll';

const NavBar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>Tap It</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='fun' smooth={true}
                                          duration={500} spy={true}
                                          exact='true' offset={-80}
                                >Fun</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='security' smooth={true}
                                          duration={500} spy={true}
                                          exact='true' offset={-80}
                                >Security</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='app' smooth={true}
                                          duration={500} spy={true}
                                          exact='true' offset={-80}
                                >The app</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='competitive' smooth={true}
                                          duration={500} spy={true}
                                          exact='true' offset={-80}
                                >Competitive</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
}

export default NavBar;