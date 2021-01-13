import React, {createContext, useState} from 'react';
import styled from 'styled-components';
import MoviesListing from './movieCard';
import {useMoviesApi} from './useMoviesApi';
import CategoriesListing from './Categories';
import PageLoader from '../../../lib/Loader';

const MainContainer = styled.div`
    margin-bottom: 30px;
    @media (max-width: 500px) {
    text-align: center;
  }
`;

export const CategoryContext = createContext(undefined);

const Movies = () => {
    const {movies, categories, loading} = useMoviesApi();
    const [selectedCategory, setSelectedCategory] = useState('0');

    return (

           loading ? <PageLoader/>
           :
               <CategoryContext.Provider value={[selectedCategory, setSelectedCategory]}>
                <MainContainer>
                    <CategoriesListing categories={categories}/>
                    <MoviesListing movies={movies} selectedCategory={selectedCategory}/>
                </MainContainer>
            </CategoryContext.Provider>
    )
};

export default Movies;