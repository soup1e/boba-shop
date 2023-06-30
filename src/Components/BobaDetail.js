import React from "react";
import PropTypes from "prop-types";

function BobaDetail({
  totalPearlBags,
  totalLycheeBags,
  totalPuddingBags,
  totalRedBeanBags,
}) {
  const toppings = [
    { name: "Pearl", bags: totalPearlBags },
    { name: "Lychee", bags: totalLycheeBags },
    { name: "Pudding", bags: totalPuddingBags },
    { name: "Red Bean", bags: totalRedBeanBags },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Boba Stock Detail</h2>
      <div className="grid grid-cols-2 gap-4">
        {toppings.map((topping) => (
          <div
            key={topping.name}
            className="bg-gray-900 p-4 rounded-xl text-white"
          >
            <h3 className="text-lg font-semibold mb-2">{topping.name}</h3>
            <p className="text-sm">Bags: {topping.bags}</p>
            <p className="text-sm">Total Units: {topping.bags * 130}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

BobaDetail.propTypes = {
  totalPearlBags: PropTypes.number.isRequired,
  totalLycheeBags: PropTypes.number.isRequired,
  totalPuddingBags: PropTypes.number.isRequired,
  totalRedBeanBags: PropTypes.number.isRequired,
};

export default BobaDetail;
