import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {List, ListItemText, Paper} from "@material-ui/core";

const MovieCard = styled(Paper)`
    width: 400px;
    padding: 20px;
    margin-bottom: 5px;
    background: ${index => index.index % 2 === 0 ? 'initial' : '#f6f6f5 !important'};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    &:hover {
        text-decoration: underline;
    }
`;

// eslint-disable-next-line react/prop-types
const MoviesListing = ({movies, selectedCategory}) =>
// eslint-disable-next-line react/prop-types
    <List>{movies.map((movie, index) =>
    {
        return (selectedCategory != '0' ? movie.categoryId == selectedCategory : true) && <MovieCard index={index} key={movie.id}>
            <StyledLink to={`movies/${movie.id}`}>
                <ListItemText>{movie.name}</ListItemText>
            </StyledLink>
            <ListItemText>{movie.description}</ListItemText>
        </MovieCard>})}
    </List>;

export default MoviesListing;