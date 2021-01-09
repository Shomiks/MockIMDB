import React from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar } from '@material-ui/core';
import AuthNav from './UserInterface';
import {useAuth0} from '@auth0/auth0-react';

const StyledAppBar = styled(AppBar)`
    margin-bottom: 60px;
    background: #00BFFF !important;
`;

const StyledToolbar = styled(Toolbar)`
    display: flex;
    justify-content: space-between;
`;

const Image = styled.img`
    height: 50px;
    cursor: pointer;
`;

const Header = () => {

    const {isLoading} = useAuth0();

    return (<StyledAppBar position="sticky">
        <StyledToolbar>
           <a href='/'>
               <Image src="https://www.thewrap.com/wp-content/uploads/2016/09/IMDb-418x270.png"/>
           </a>
            {!isLoading && <AuthNav/>}
        </StyledToolbar>
    </StyledAppBar>)
};

export default Header;