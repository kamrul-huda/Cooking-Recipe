import PropTypes from "prop-types";
const CookingRecipes = ({ cookingRecipes, cookingTime, calories }) => {
  return (
    <div>
      <div>
        <h1 className="font-semibold text-2xl text-[#282828] lexend">
          Currently cooking: {cookingRecipes?.length}
        </h1>
        <hr className="mt-2 mb-2 ml-7 mr-7" />
        <div>
          <table className="firaSans">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories </th>
            </tr>
            {cookingRecipes.map((recipe, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{recipe.recipe_name}</td>
                <td>{recipe.prepare_time} minutes</td>
                <td>{recipe.calories} calories</td>
              </tr>
            ))}
          </table>
        </div>
      </div>

      <div className="mt-4 flex justify-between">
        <div className="w-1/3"></div>
        <table className="w-2/3 firaSans">
          <tr>
            <td className="bg-white"></td>
            <td className="bg-white"></td>
            <td className="bg-white">Total Time = {cookingTime} minutes</td>
            <td className="bg-white">Total Calories = {calories} calories</td>
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
};

export default CookingRecipes;
