import React from 'react';
import {
    FooterContainer, FooterLink, FooterLinkItems,
    FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle,
    FooterWrap, Img, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";
import Tos from '../../legal/tos.docx';
import Privacy from '../../legal/privacy.docx';

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
                            <FooterLink to={Tos} target="_blank">Terms of service</FooterLink>
                            <FooterLink to={Privacy} target="_blank">Privacy policy</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            <Img src={require('../../images/main/logo.svg').default} alt='Infinity Solutions Logo'/>
                        </SocialLogo>
                        <WebsiteRights>Infinity Solutions © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;