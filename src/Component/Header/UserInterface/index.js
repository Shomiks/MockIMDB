import {useAuth0} from '@auth0/auth0-react';
import {Nav} from 'react-bootstrap';
import LogoutButton from './logoutButton';
import LoginButton from './loginButton';
import React from 'react';
import {Typography} from '@material-ui/core';
import styled from 'styled-components';

const UserStatus = styled(Typography)`
    display: flex;
    align-items: center;
    margin-right: 15px !important;  
`;

const AuthNav = () => {
    const {isAuthenticated, user} = useAuth0();

    return (
        <Nav>
            {isAuthenticated ?
                <span>Welcome {user.nickname}<LogoutButton/></span>
                : <span>You're not logged in<LoginButton/></span>}
        </Nav>
    );
};

export default AuthNav;