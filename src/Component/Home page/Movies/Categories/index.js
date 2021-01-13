import React, {useContext} from 'react';
import {Select} from "@material-ui/core";
import {CategoryContext} from '../index';

// eslint-disable-next-line react/prop-types
const CategoriesListing = ({categories}) => {
    const [state, setState] = useContext(CategoryContext);

    const handleChange = (event) => {
        const name = event.target.value;
        setState(name);
    };
// eslint-disable-next-line react/prop-types
    return (
        <Select
            native
            value={state}
            onChange={handleChange}
            label="Category">
            <option value="0">All categories</option>
            {/* eslint-disable-next-line react/prop-types */}
            {categories.map(category => <option key={category.id} value={category.id}>
                {category.name}
            </option>)}
        </Select>
    );
};

export default CategoriesListing;