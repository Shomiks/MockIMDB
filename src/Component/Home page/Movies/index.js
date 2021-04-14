import React, { createContext, useState } from "react";
import styled from "styled-components";
import MoviesListing from "./movieCard";
import { useMoviesApi } from "./useMoviesApi";
import CategoriesListing from "./Categories";
import PageLoader from "../../../lib/Loader";
import { TextField } from "@material-ui/core";

const MainContainer = styled.div`
  margin-bottom: 30px;
  @media (max-width: 500px) {
    text-align: center;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & > div {
    width: 150px;
  }
  @media (max-width: 500px) {
    & > div {
      width: 130px;
    }
  }
`;

export const CategoryContext = createContext(undefined);

const Movies = () => {
  const { movies, categories, loading } = useMoviesApi();
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [search, setSearch] = useState("");
  const searchResults = movies.filter((movie) =>
    movie.name.startsWith(search.toUpperCase())
  );
  const renderMovies = () => search ? searchResults : movies;

  return loading ? (
    <PageLoader />
  ) : (
    <CategoryContext.Provider value={[selectedCategory, setSelectedCategory]}>
      <MainContainer>
        <FilterContainer>
          <CategoriesListing categories={categories} />
          <TextField
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </FilterContainer>
        <MoviesListing movies={renderMovies()} selectedCategory={selectedCategory} />
      </MainContainer>
    </CategoryContext.Provider>
  );
};

export default Movies;
