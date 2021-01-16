import React from 'react';
import Icon1 from '../../../images/tapit.svg';
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon, ServicesP,
    ServicesWrapper
} from "./ServicesElements";

const Services = () => {
    return(
        <ServicesContainer id="projects">
            <ServicesH1>Our projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>TapIt</ServicesH2>
                    <ServicesP>Our revolutionary mobile game</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;