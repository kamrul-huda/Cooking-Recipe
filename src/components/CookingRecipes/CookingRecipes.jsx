import PropTypes from "prop-types";
import CookingRecipe from "../CookingRecipe/CookingRecipe";
const CookingRecipes = ({ cookingRecipes, cookingTime, calories, count }) => {
  console.log(count);
  return (
    <div>
      <h1 className="font-semibold text-2xl text-[#282828] lexend">
        Currently cooking: {cookingRecipes?.length}
      </h1>
      <hr className="mt-2 mb-2 ml-7 mr-7" />
      <div>
        <table>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories </th>
          </tr>
          {cookingRecipes?.map((recipe, idx) => (
            <CookingRecipe
              key={idx}
              recipe={recipe}
              count={count}
            ></CookingRecipe>
          ))}
        </table>
      </div>
      <div>
        <table>
          <tr>
            <td></td>
            <td></td>
            <td>Total Time = {cookingTime} minutes</td>
            <td>Total Calories = {calories} calories</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

CookingRecipes.propTypes = {
  cookingRecipes: PropTypes.array,
  cookingTime: PropTypes.number,
  calories: PropTypes.number,
  count: PropTypes.number,
};

export default CookingRecipes;
