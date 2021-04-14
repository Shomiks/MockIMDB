import React, { useContext } from "react";
import { Select } from "@material-ui/core";
import { CategoryContext } from "../index";

const CategoriesListing = ({ categories }) => {
  const [categoryId, setCategoryId] = useContext(CategoryContext);

  const handleChange = (event) => {
    const name = event.target.value;
    setCategoryId(name);
  };

  return (
    <Select native value={categoryId} onChange={handleChange} label="Category">
      <option value={0}>All categories</option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </Select>
  );
};

export default CategoriesListing;
