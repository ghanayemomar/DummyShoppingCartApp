import React from "react";
import Meals from "./components/Meals/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <React.Fragment>
      <Cart></Cart>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
