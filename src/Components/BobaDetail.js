import React from "react";
import PropTypes from "prop-types";

function BobaDetail({ totalPearl, totalLychee, totalPudding, totalRedBean }) {
  const toppings = [
    { name: "Pearl", bags: Math.ceil(totalPearl / 130) },
    { name: "Lychee", bags: Math.ceil(totalLychee / 130) },
    { name: "Pudding", bags: Math.ceil(totalPudding / 130) },
    { name: "Red Bean", bags: Math.ceil(totalRedBean / 130) },
  ];

  const toppingCards = [];

  toppings.forEach((topping) => {
    for (let i = 0; i < topping.bags; i++) {
      const card = (
        <div className="card bg-gray-900 shadow-xl" key={`${topping.name}${i}`}>
          <div className="card-body rounded-xl">
            <h2 className="card-title text-2xl">
              {topping.name} Bag #{i + 1}
            </h2>
          </div>
        </div>
      );
      toppingCards.push(card);
    }
  });

  return (
    <React.Fragment>
      <h2 className="text-2xl mt-10 font-bold flex justify-center">Stock:</h2>
      <div className="mx-auto m-4 max-w-screen-xl">
        <div className="grid grid-cols-6 gap-4">{toppingCards}</div>
      </div>
    </React.Fragment>
  );
}

BobaDetail.propTypes = {
  totalPearlBags: PropTypes.number.isRequired,
  totalLycheeBags: PropTypes.number.isRequired,
  totalPuddingBags: PropTypes.number.isRequired,
  totalRedBeanBags: PropTypes.number.isRequired,
};

export default BobaDetail;
