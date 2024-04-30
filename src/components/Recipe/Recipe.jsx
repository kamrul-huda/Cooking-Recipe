import PropTypes from "prop-types";
import { HiOutlineClock } from "react-icons/hi2";
import { RiFireLine } from "react-icons/ri";

const Recipe = ({ recipe, handleAddToCook }) => {
  const {
    recipe_image,
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    prepare_time,
    calories,
  } = recipe;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 border-2">
        <img className="rounded-xl" src={recipe_image} alt="" />
        <div className="mt-6 space-y-3">
          <h2 className="text-left font-semibold text-xl text-[#282828]">
            {recipe_name}
          </h2>
          <p className="text-left text-[#878787] fira-sans-font">
            {short_description}
          </p>
          <hr className="footer-line border w-full" />
          <h3 className="text-left font-medium text-xl text-[#282828]">
            Ingredients: {recipe_id}
          </h3>
          <ul className="text-left pl-8 text-[#878787] fira-sans-font  space-y-1">
            {ingredients.map((ingredient, index) => (
              <li key={index} className="list-disc">
                {ingredient}
              </li>
            ))}
          </ul>
          <hr className="footer-line border w-full" />

          <div className="flex justify-between items-center text-left">
            <p className="flex items-center fira-sans-font gap-2">
              <span>
                <HiOutlineClock />
              </span>
              <span>{prepare_time} minutes</span>
            </p>
            <p className="flex items-center fira-sans-font gap-2">
              <span>
                <RiFireLine />
              </span>
              <span> {calories} calories</span>
            </p>
          </div>
          <div className="flex justify-start">
            <button
              onClick={() => handleAddToCook(recipe, recipe_id)}
              className="btn bg-[#0BE58A] rounded-full pl-8 pr-8 font-medium text-[#150B2B] hover:bg-[#0BE58A]  hover:scale-105"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleAddToCook: PropTypes.func,
};

export default Recipe;
