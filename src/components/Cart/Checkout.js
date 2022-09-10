import classes from "./Checkout.module.css";
const Checkout = (props) => {
    const confirmHandler =(event) =>{
        event.preventDefault();
    }
  return (
    <form onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input trpe="text" id="name" />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input trpe="text" id="street" />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input trpe="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input trpe="text" id="city" />
      </div>
      <button type="button" onClick={props.onCancel}>Cancel</button>
      <button type="submit">Confirm</button>
    </form>
  );
};
export default Checkout;