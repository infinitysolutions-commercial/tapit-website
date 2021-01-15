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
                    <SidebarLink to='info' onClick={toggle}>Info</SidebarLink>
                    <SidebarLink to='security' onClick={toggle}>Security</SidebarLink>
                    <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
                    <SidebarLink to='future' onClick={toggle}>Future</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    );
}

export default Sidebar;