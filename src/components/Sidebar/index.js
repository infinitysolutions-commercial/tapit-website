import React from 'react';
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarLink,
    SidebarMenu,
    SidebarWrapper
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='fun' onClick={toggle}>Fun</SidebarLink>
                    <SidebarLink to='security' onClick={toggle}>Security</SidebarLink>
                    <SidebarLink to='app' onClick={toggle}>The app</SidebarLink>
                    <SidebarLink to='competitive' onClick={toggle}>Competitive</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;