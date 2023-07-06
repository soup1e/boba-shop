import React from "react";
import PropTypes from "prop-types";

function BobaDetail({ totalPearl, totalLychee, totalPudding, totalRedBean }) {
  const toppings = [
    {
      name: "Pearl",
      bags: Math.floor(totalPearl / 130),
      remainder: totalPearl % 130,
      color: "bg-blue-900",
    },
    {
      name: "Lychee",
      bags: Math.floor(totalLychee / 130),
      remainder: totalLychee % 130,
      color: "bg-yellow-900",
    },
    {
      name: "Pudding",
      bags: Math.floor(totalPudding / 130),
      remainder: totalPudding % 130,
      color: "bg-green-900",
    },
    {
      name: "Red Bean",
      bags: Math.floor(totalRedBean / 130),
      remainder: totalRedBean % 130,
      color: "bg-red-900",
    },
  ];

  const toppingCards = [];

  toppings.forEach((topping) => {
    for (let i = 0; i < topping.bags; i++) {
      const card = (
        <div
          className={`card ${topping.color} shadow-xl`}
          key={`${topping.name}${i}`}
        >
          <div className="card-body text-white rounded-xl">
            <h2 className="card-title text-2xl">
              {topping.name} Bag #{i + 1}
            </h2>
            <p className="text-sm font-thin">130 out of 130</p>
          </div>
        </div>
      );
      toppingCards.push(card);
    }

    if (topping.remainder > 0) {
      const remainderCard = (
        <div
          className={`card text-white bg-gray-700 shadow-xl`}
          key={`Opened ${topping.name}`}
        >
          <div className="card-body rounded-xl">
            <h2 className="card-title text-2xl">Opened {topping.name} bag</h2>
            <p className="text-sm font-thin">{topping.remainder} out of 130</p>
          </div>
        </div>
      );
      toppingCards.unshift(remainderCard);
    }
  });

  return (
    <React.Fragment>
      <h2 className="text-2xl mt-10 font-bold flex justify-center text-gray-600">
        Stock:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto p-4 m-4 max-w-screen-xl">
        {toppingCards}
      </div>
    </React.Fragment>
  );
}

BobaDetail.propTypes = {
  totalPearl: PropTypes.number.isRequired,
  totalLychee: PropTypes.number.isRequired,
  totalPudding: PropTypes.number.isRequired,
  totalRedBean: PropTypes.number.isRequired,
};

export default BobaDetail;
