import PropTypes from "prop-types";

const CookedItem = ({
  cookedRecipe,
  handleAddToCooking,
  index,
  handleCookingTime,
  handleCalories,
}) => {
  const { recipe_id, recipe_name, prepare_time, calories } = cookedRecipe;

  return (
    <tr className="text-[#282828B3]">
      <td>{index + 1}</td>
      <td>{recipe_name}</td>
      <td>{prepare_time} minutes</td>
      <td>{calories} calories</td>
      <td>
        <button
          className="btn bg-[#0BE58A] rounded-full pl-4 pr-4 font-medium text-[#150B2B]  hover:bg-[#0BE58A]  hover:scale-105"
          onClick={() => {
            handleAddToCooking(recipe_id, cookedRecipe, index);
            handleCookingTime(prepare_time);
            handleCalories(calories);
          }}
        >
          Preparing
        </button>
      </td>
    </tr>
  );
};

CookedItem.propTypes = {
  cookedRecipe: PropTypes.object,
  handleAddToCooking: PropTypes.func,
  index: PropTypes.number,
  handleCookingTime: PropTypes.func,
  handleCalories: PropTypes.func,
};

export default CookedItem;
