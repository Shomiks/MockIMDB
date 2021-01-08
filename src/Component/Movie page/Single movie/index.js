import React from 'react';
import PageLoader from '../../lib/Loader';
import {Paper, Typography} from '@material-ui/core';
import styled from 'styled-components';
import {useSingleMovie} from './useSingleMovie';
import Comments from './comments';

const SingleMovieContainer = styled(Paper)`
    margin: 0 auto;
    width: 80%;
    justify-content: center;
    padding: 30px;
`;

const MediaContainer = styled.div`
    display: flex;
    margin: 30px 0;
    height: 300px;
`;

const Image = styled.img`
    width: 200px;
    height: 100%;
`;

const Description = styled(Typography)`
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    margin-bottom: 20px !important;
`;

const SingeMovie = () => {

    const {movie, comments, loading} = useSingleMovie();

    return (
       loading ? <PageLoader/>
       :
               <SingleMovieContainer>
            <Typography variant="h4" align="center">{movie.name}</Typography>
            <MediaContainer>
                <Image src={movie.imageUrl}/>
            </MediaContainer>
            <Description>{movie.description}</Description>
                   <Comments comments={comments}/>
        </SingleMovieContainer>
    );
};

export default SingeMovie;