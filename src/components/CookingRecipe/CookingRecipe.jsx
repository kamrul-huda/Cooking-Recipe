import PropTypes from "prop-types";

const CookingRecipe = (recipe, index) => {
  const { recipe_name, prepare_time, calories } = recipe;
  console.log(index);
  return (
    <tr className="text-[#282828B3] firaSans mb-2 gap-2">
      <td>{0}</td>
      <td>{recipe_name}</td>
      <td>{prepare_time} minutes</td>
      <td>{calories} calories</td>
    </tr>
  );
};

CookingRecipe.propTypes = {
  recipe: PropTypes.array,
  index: PropTypes.number,
};

export default CookingRecipe;
