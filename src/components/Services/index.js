import React from 'react';
import Icon1 from '../../images/tapit.svg';
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
        <ServicesContainer id="services">
            <ServicesH1>I nostri prodotti</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>TapIt!</ServicesH2>
                    <ServicesP>Il nostro divertentissimo gioco mobile</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;