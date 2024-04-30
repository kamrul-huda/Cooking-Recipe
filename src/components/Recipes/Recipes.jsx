import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";
import PropTypes from "prop-types";

const Recipes = ({ handleAddToCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            recipe={recipe}
            handleAddToCook={handleAddToCook}
          ></Recipe>
        ))}
      </div>
    </div>
  );
};

Recipes.propTypes = {
  handleAddToCook: PropTypes.func,
};

export default Recipes;
