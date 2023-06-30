import React from "react";
import PropTypes from "prop-types";

function BobaList({ drinks, sellDrink }) {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mx-auto max-w-screen-xl">
        {drinks.map((drink) => (
          <div key={drink.name} className="card bg-gray-900 shadow-xl">
            <div className="card-body rounded-xl">
              <h2 className="card-title text-2xl">
                {drink.name} with{" "}
                {drink.topping.charAt(0).toUpperCase() + drink.topping.slice(1)}
              </h2>
              <p className="text-sm font-thin">{drink.description}</p>
              <div className="card-actions flex justify-between items-center mt-4">
                <h4 className="text-base font-normal">${drink.price}</h4>
                <button
                  onClick={() => sellDrink(drink.name)}
                  className="btn btn-accent py-2 px-10"
                >
                  Sell
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

BobaList.propTypes = {
  drinks: PropTypes.object.isRequired,
  sellDrink: PropTypes.func.isRequired,
};

export default BobaList;
