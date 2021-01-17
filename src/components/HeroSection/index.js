import React, { useState } from 'react';
import {
    ArrowForward, ArrowRight, HeroBg,
    HeroBtnWrapper, HeroContainer,
    HeroContent, HeroH1, HeroP, VideoBg
} from "./HeroElements";
import Video from '../../videos/main/hero.mp4';
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
                <HeroH1>Yeah, we code.</HeroH1>
                <HeroP>Mobile apps are our speciality</HeroP>
                <HeroBtnWrapper>
                    <Button to='projects' onMouseEnter={onHover}
                            onMouseLeave={onHover} primary='true'
                            buttonenabled="true" smooth={true}
                            duration={500} spy={true}
                            exact='true' offset={-80} dark='true'
                    >Projects {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;