import React from 'react';
import {withAuthenticationRequired} from '@auth0/auth0-react';
import {Route} from 'react-router-dom';
import PageLoader from '../lib/Loader';

const privateRoute = ({component, ...args})=> (
    <Route component={withAuthenticationRequired(component,{
        onRedirecting: () => <PageLoader/>,
    })} {...args}/>
);

export default privateRoute;