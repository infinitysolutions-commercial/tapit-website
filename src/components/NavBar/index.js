import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu
} from "./NavbarElements";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {

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
                        <NavLogo to='/' onClick={toggleHome}>Infinity Solutions</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars/>
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='info' smooth={true}
                                          duration={500} spy={true}
                                          exact='true' offset={-80}
                                >Info</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='security' smooth={true}
                                          duration={500} spy={true}
                                          exact='true' offset={-80}
                                >Security</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='projects' smooth={true}
                                          duration={500} spy={true}
                                          exact='true' offset={-80}
                                >Projects</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='future' smooth={true}
                                          duration={500} spy={true}
                                          exact='true' offset={-80}
                                >Future</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;