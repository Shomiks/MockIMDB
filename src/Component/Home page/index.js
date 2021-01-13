import React from 'react';
import styled from 'styled-components';
import Movies from './Movies';

const Listing = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const HomePage = () => <Listing><Movies/></Listing>;

export default HomePage;