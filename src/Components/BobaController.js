import React, { useState } from "react";
import BobaDetail from "./BobaDetail";
import BobaList from "./BobaList";
import Header from "./Header";
import BobaForm from "./BobaForm";

function BobaController() {
  const [totalPearl, setTotalPearl] = useState(52);
  const [totalLychee, setTotalLychee] = useState(75);
  const [totalPudding, setTotalPudding] = useState(36);
  const [totalRedBean, setTotalRedBean] = useState(40);

  const restockBoba = () => {
    const updatedBobaCount = totalPearl + 130;
    setTotalPearl(updatedBobaCount);
  };

  const sellDrink = (drinkName) => {
    const drink = drinks.find((drink) => drink.name === drinkName);

    // make if other toppings
    if (drink.topping === "pearl" && totalPearl > 0) {
      const updatedPearlCount = totalPearl - 1;
      setTotalPearl(updatedPearlCount);
    } else if (drink.topping === "lychee" && totalLychee > 0) {
      const updatedLycheeCount = totalLychee - 1;
      setTotalLychee(updatedLycheeCount);
    } else if (drink.topping === "pudding" && totalPudding > 0) {
      const updatedPuddingCount = totalPudding - 1;
      setTotalPudding(updatedPuddingCount);
    } else if (drink.topping === "redBean" && totalRedBean > 0) {
      const updatedRedBean = totalRedBean - 1;
      setTotalRedBean(updatedRedBean);
    } else {
      alert(`Out Of ${drink.topping.toUpperCase()}!`);
    }
  };

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
      <Header
        totalPearl={totalPearl}
        totalLychee={totalLychee}
        totalPudding={totalPudding}
        totalRedBean={totalRedBean}
      />
      <BobaList drinks={drinks} sellDrink={sellDrink} />
      <BobaForm restockBoba={restockBoba} />
      <BobaDetail />
    </React.Fragment>
  );
}

export default BobaController;
