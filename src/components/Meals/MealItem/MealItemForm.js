import Input from "../../Ul/Input";
import React from "react";
import { useRef  , useState} from "react";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
 const[amountIsValid , setAmountIsValid] =  useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; //Always String and we want to convet it
    const entedAmountNumber = +enteredAmount;//Make It String 
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(entedAmountNumber);
    
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef} //To Extarct Te Entered Number!
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "0",
          max: "5",
          step: "1",
          defaultValue: "0",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please Enter Valid Value!</p>}
    </form>
  );
};

export default MealItemForm;
