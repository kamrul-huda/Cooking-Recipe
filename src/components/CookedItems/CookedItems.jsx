import PropTypes from "prop-types";
import CookedItem from "../CookedItem/CookedItem";

const CookedItems = ({
  cookedRecipes,
  handleAddToCooking,
  handleCookingTime,
  handleCalories,
}) => {
  return (
    <div>
      <h1 className="font-semibold text-2xl text-[#282828] lexend">
        Want to Cook: {cookedRecipes.length}
      </h1>
      <hr className="mt-2 mb-2 ml-7 mr-7" />
      <div>
        <table className="firaSans">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories </th>
            <th></th>
          </tr>
          {cookedRecipes.map((cookedRecipe, index) => (
            <CookedItem
              key={index}
              cookedRecipe={cookedRecipe}
              index={index}
              handleAddToCooking={handleAddToCooking}
              handleCookingTime={handleCookingTime}
              handleCalories={handleCalories}
            ></CookedItem>
          ))}
        </table>
      </div>
    </div>
  );
};

CookedItems.propTypes = {
  cookedRecipes: PropTypes.array,
  handleAddToCooking: PropTypes.func,
  handleCookingTime: PropTypes.func,
  handleCalories: PropTypes.func,
};

export default CookedItems;
