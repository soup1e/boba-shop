import React, { useState } from "react";
import BobaDetail from "./BobaDetail";
import BobaList from "./BobaList";
import Header from "./Header";
import BobaForm from "./BobaForm";

function BobaController() {
  const [drinks, setDrinks] = useState([
    {
      name: "Thai Pearl Milk Tea",
      price: 4.99,
      topping: "pearl",
      description:
        "Sweet and creamy milk tea that has unique thai black tea flavor creating nice strong tea taste",
    },
    {
      name: "Classic Pearl Milk Tea",
      price: 4.99,
      topping: "pearl",
      description:
        "Rich and creamy milk tea with the right balance of sweetness",
    },
    {
      name: "Mango Green Milk Tea",
      price: 4.99,
      topping: "pearl",
      description:
        "Mix of freshly brewed green tea and creamer that is sweetened with fruity mango jam creating a vibrant yellow color",
    },
    {
      name: "Okinagwa Green Milk Tea",
      price: 4.99,
      topping: "pearl",
      description:
        "Mix of freshly brewed green tea and creamer that is sweetened with fruity mango jam creating a vibrant yellow color",
    },
  ]);

  return (
    <React.Fragment>
      <Header />
      <BobaList drinks={drinks} setDrinks={setDrinks} />
      <BobaForm setDrinks={setDrinks} />
      <BobaDetail />
    </React.Fragment>
  );
}

export default BobaController;
