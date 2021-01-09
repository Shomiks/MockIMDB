import Loader from 'react-loader-spinner';
import React from 'react';
import styled from 'styled-components';

const LoaderContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PageLoader = () =>
    <LoaderContainer>
    <Loader
    type="Bars"
    color="#00BFFF"
    height={100}
    width={100}
    />
    </LoaderContainer>;

export default PageLoader;