import React from 'react';
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrap,
    Img,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Informations</FooterLinkTitle>
                            <FooterLink to="/signin">Terms of service</FooterLink>
                            <FooterLink to="/signin">Privacy policy</FooterLink>
                            <FooterLink to="/signin">Support</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <Img src={require('../../../images/logo.svg').default} alt='Infinity Solutions Logo'/>
                        </SocialLogo>
                        <WebsiteRights>Infinity Solutions © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;