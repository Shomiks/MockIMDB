import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { List, ListItemText, Paper } from "@material-ui/core";

const MovieCard = styled(Paper)`
  width: 400px;
  padding: 20px;
  margin-bottom: 5px;
  background: ${(index) =>
    index.index % 2 === 0 ? "initial" : "#f6f6f5 !important"};
  @media (max-width: 500px) {
    width: 80%;
    margin: 10px auto;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  &:hover {
    text-decoration: underline;
  }
`;

const MoviesListing = ({ movies, selectedCategory }) => (
  <List>
    {movies.map((movie, index) => {
      return (
        (selectedCategory !== "0"
          ? movie.categoryId === parseInt(selectedCategory)
          : true) && (
          <MovieCard index={index} key={movie.id}>
            <StyledLink to={`movies/${movie.id}`}>
              <ListItemText>{movie.name}</ListItemText>
            </StyledLink>
            <ListItemText>{movie.description}</ListItemText>
          </MovieCard>
        )
      );
    })}
  </List>
);

export default MoviesListing;
