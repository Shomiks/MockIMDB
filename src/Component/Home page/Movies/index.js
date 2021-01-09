import React, {createContext, useState} from 'react';
import styled from 'styled-components';
import MoviesListing from './movieCard';
import {useMovies} from './useMovies';
import CategoriesListing from './categoryList';
import PageLoader from '../../../lib/Loader';

const MainContainer = styled.div`
    margin-bottom: 30px;
`;

export const CategoryContext = createContext(undefined);

const Movies = () => {
    const {movies, categories, loading} = useMovies();
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