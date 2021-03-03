import React from 'react';
import Icon1 from '../../images/main/menu.svg';
import Icon2 from '../../images/main/local.svg';
import Icon3 from '../../images/main/settings.svg';
import {
    ServicesCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon, ServicesP,
    ServicesWrapper
} from "./ProjectsElements";

const Projects = () => {
    return(
        <ServicesContainer id="app">
            <ServicesH1>The app</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Menu</ServicesH2>
                    <ServicesP>Navigate through the sections with the menu</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Local</ServicesH2>
                    <ServicesP>Play with your friends our game in the Local section</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Settings</ServicesH2>
                    <ServicesP>Change the settings of the app in the Settings section</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Projects;
