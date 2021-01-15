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
                            <FooterLinkTitle>Informazioni</FooterLinkTitle>
                            <FooterLink to="/signin">Termini di servizio</FooterLink>
                            <FooterLink to="/signin">Politica sulla privacy</FooterLink>
                            <FooterLink to="/signin">Supporto</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <Img src={require('../../images/logo.svg').default} alt={'IS Logo'}/>
                        </SocialLogo>
                        <WebsiteRights>Infinity Solutions © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;