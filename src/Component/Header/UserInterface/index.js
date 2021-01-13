import {useAuth0} from '@auth0/auth0-react';
import {Nav} from 'react-bootstrap';
import LogoutButton from './logoutButton';
import LoginButton from './loginButton';
import React from 'react';

const AuthNav = () => {
    const {isAuthenticated, user} = useAuth0();

    return (
        isAuthenticated ?
            <>
                <span>Welcome {user.nickname}</span>
                <LogoutButton/>
            </>
            :
            <>
                <span>You're not logged</span>
                <LoginButton/>
            </>
    );
};

export default AuthNav;