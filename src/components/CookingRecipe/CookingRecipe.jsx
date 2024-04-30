import PropTypes from "prop-types";

const CookingRecipe = (recipe, count) => {
  const { recipe_name, prepare_time, calories } = recipe.recipe;
  console.log(count);

  return (
    <tr className="text-[#282828B3] fira-sans-font mb-2 gap-2">
      <td>{count + 1}</td>
      <td>{recipe_name}</td>
      <td>{prepare_time} minutes</td>
      <td>{calories} calories</td>
    </tr>
  );
};

CookingRecipe.propTypes = {
  recipe: PropTypes.object,
  count: PropTypes.number,
};

export default CookingRecipe;
