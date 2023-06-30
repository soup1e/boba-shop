import React, { useState } from "react";
import BobaDetail from "./BobaDetail";
import BobaList from "./BobaList";
import Header from "./Header";
import BobaForm from "./BobaForm";

function BobaController() {
  const [totalPearl, setTotalPearl] = useState(131);
  const [totalLychee, setTotalLychee] = useState(260);
  const [totalPudding, setTotalPudding] = useState(390);
  const [totalRedBean, setTotalRedBean] = useState(200);

  const restock = (type) => {
    if (type === "pearl") {
      const updatedCount = totalPearl + 130;
      setTotalPearl(updatedCount);
    } else if (type === "lychee") {
      const updatedCount = totalLychee + 130;
      setTotalLychee(updatedCount);
    } else if (type === "pudding") {
      const updatedCount = totalPudding + 130;
      setTotalPudding(updatedCount);
    } else if (type === "red bean") {
      const updatedCount = totalRedBean + 130;
      setTotalRedBean(updatedCount);
    }
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
    } else if (drink.topping === "red bean" && totalRedBean > 0) {
      const updatedRedBean = totalRedBean - 1;
      setTotalRedBean(updatedRedBean);
    } else {
      alert(`Out Of ${drink.topping.toUpperCase()}!`);
    }
  };

  const [drinks, setDrinks] = useState([
    {
      name: "Thai Milk Tea",
      price: 4.99,
      topping: "pearl",
      description:
        "Sweet and creamy milk tea that has unique thai black tea flavor creating nice strong tea taste",
    },
    {
      name: "Classic Milk Tea",
      price: 4.99,
      topping: "pearl",
      description: "Creamy milk tea with the right balance of sweetness",
    },
    {
      name: "Mango Green Tea",
      price: 4.99,
      topping: "pearl",
      description:
        "Mix of freshly brewed green tea and creamer that is sweetened with fruity mango jam creating a vibrant yellow color",
    },
    {
      name: "Okinawa Tea",
      price: 5.99,
      topping: "pearl",
      description:
        "Okinawa tea infused with the delightful chewiness of pearl toppings",
    },
    {
      name: "Peach Tea Ice Blended",
      price: 7.99,
      topping: "lychee",
      description:
        "Refreshing peach tea blended with ice and topped with delightful lychee jelly, creating a perfect balance of fruity flavors and coolness.",
    },
    {
      name: "Hokkaido Milk Tea",
      price: 5.99,
      topping: "lychee",
      description:
        "Rich flavor of Hokkaido milk tea infused with the delicate sweetness of lychee jelly.",
    },
    {
      name: "Taro Ice Blended",
      price: 6.99,
      topping: "pudding",
      description:
        "Distinctive flavor of taro in this refreshing ice blended drink, enhanced with the delectable addition of smooth and sweet pudding.",
    },
    {
      name: "Strawberry Tea",
      price: 6.99,
      topping: "pudding",
      description:
        "Fruity Strawberry Tea mixed with the delectable addition of smooth and sweet pudding.",
    },
    {
      name: "Matcha Milk Tea",
      price: 5.99,
      topping: "red bean",
      description:
        "Matcha Milk tea with premium matcha powder added gives the bubble tea a subtle bitterness that pairs perfectly with sweet red bean",
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
      <div className="container mx-auto mt-8">
        <BobaList drinks={drinks} sellDrink={sellDrink} />
        <BobaForm restock={restock} />
        <BobaDetail
          totalPearl={totalPearl}
          totalLychee={totalLychee}
          totalPudding={totalPudding}
          totalRedBean={totalRedBean}
        />
      </div>
    </React.Fragment>
  );
}

export default BobaController;
