import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
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
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Lorem Ipsum</ServicesH2>
                    <ServicesP>Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Lorem Ipsum</ServicesH2>
                    <ServicesP>Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Lorem Ipsum</ServicesH2>
                    <ServicesP>Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;