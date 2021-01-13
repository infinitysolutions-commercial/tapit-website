import React, { useState } from 'react';
import {
    ArrowForward,
    ArrowRight,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1, HeroP,
    VideoBg
} from "./HeroElements";
import Video from '../../videos/hero.mp4';
import { Button } from "../ButtonElement";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='vide/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>We Bring Ideas Into Code</HeroH1>
                <HeroP>Have you an idea? Just tell us, we're here to help you.</HeroP>
                <HeroBtnWrapper>
                    <Button to='signup'
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary='true'
                            dark='true'>Get started {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;