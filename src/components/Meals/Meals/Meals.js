import React from "react";
import MealsSummry from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  return <React.Fragment>
    <MealsSummry/>
    <AvailableMeals/>
  </React.Fragment>;
};
export default Meals;
