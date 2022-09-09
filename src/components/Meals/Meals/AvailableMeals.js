import React from "react";
import { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "../MealItem/MealItem";
import Card from "../../Ul/Card";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://react-meals-a46c3-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false)
    };
    fetchMeals();
    
  }, []);

  if(isLoading){
    return <section className={classes.MealsLoading}>
      <p>Loading...</p>
    </section>
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
//hint: Use Effect Should Return a function not reaturn a promise so youcant excute the fetch function directrly inside it you have to put it inside an function inside the useEffect
//async await to make sure that the function if got the Data from the backend
//loading handling is very nice we made an a return section with if statemnt to check if it loading and show the loading paragraph
