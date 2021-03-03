import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>Tap It</HeroH1>
                <HeroP>Challange your friends!</HeroP>
                <HeroBtnWrapper>
                    <Button to='' onMouseEnter={onHover}
                            onMouseLeave={onHover} primary='true'
                            buttonenabled="true" smooth={true}
                            duration={500} spy={true}
                            exact='true' offset={-80} dark='true'
                    ><Link to="route" target="_blank" style={{ textDecoration: "none" }} onClick={(event) => {event.preventDefault(); window.open("https://play.google.com/store/apps/details?id=com.infinitysolutions.tapit");}}>Download now </Link>{hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
}

export default HeroSection;