import { useState } from "react";
import "./App.css";
import CookedItems from "./components/CookedItems/CookedItems";
import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";
import CookingRecipes from "./components/CookingRecipes/CookingRecipes";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RecipeHeader from "./components/RecipeHeader/RecipeHeader";

function App() {
  const [cookedRecipes, setCookedRecipes] = useState([]);

  const notify = () => toast("Already exist!");

  const handleAddToCook = (recipe, id) => {
    const newCookedRecipe = [...cookedRecipes, recipe];

    const isExist = cookedRecipes.find((r) => r.recipe_id === id);
    if (!isExist) {
      setCookedRecipes(newCookedRecipe);
    } else {
      notify();
    }
  };

  const [cookingRecipes, setCookingRecipes] = useState([]);
  const [count, setIndex] = useState(0);

  const handleAddToCooking = (id, recipe, count) => {
    const newCookingRecipe = [...cookingRecipes, recipe];
    setCookingRecipes(newCookingRecipe);
    setIndex(count + 1);
    console.log(count);

    const remainingCookingRecipes = cookedRecipes.filter(
      (cookingRecipe) => cookingRecipe.recipe_id !== id
    );
    setCookedRecipes(remainingCookingRecipes);
  };

  const [cookingTime, setCookingTime] = useState(0);
  const handleCookingTime = (time) => {
    setCookingTime(cookingTime + time);
  };

  const [calories, setCalories] = useState(0);
  const handleCalories = (cal) => {
    setCalories(calories + cal);
  };

  return (
    <>
      <Header></Header>
      <RecipeHeader></RecipeHeader>
      <div className="md:flex justify-between mt-10 gap-4">
        <div className="w-2/3">
          <Recipes handleAddToCook={handleAddToCook}></Recipes>
        </div>

        <div className="w-1/3 border-2 p-2 rounded-2xl space-y-3">
          <CookedItems
            cookedRecipes={cookedRecipes}
            handleAddToCooking={handleAddToCooking}
            handleCookingTime={handleCookingTime}
            handleCalories={handleCalories}
          ></CookedItems>

          <CookingRecipes
            cookingRecipes={cookingRecipes}
            cookingTime={cookingTime}
            calories={calories}
            count={count}
          ></CookingRecipes>

          <ToastContainer />
        </div>
      </div>
    </>
  );
}

export default App;
