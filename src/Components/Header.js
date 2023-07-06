import React from "react";
import PropTypes from "prop-types";

function Header({
  totalPearl,
  totalLychee,
  totalPudding,
  totalRedBean,
  toggleFullVisibility,
  toggleView,
}) {
  return (
    <React.Fragment>
      <div className="navbar bg-gray-800 text-gray-200">
        <div className="flex-1">
          <button className="btn btn-ghost normal-case text-xl">
            Boba Shop
          </button>
        </div>
        <div className="flex-none gap-2">
          <button onClick={toggleFullVisibility} className="btn">
            Show All
          </button>
          <button onClick={toggleView} className="btn">
            Toggle View
          </button>
        </div>
        <div className="flex-none hidden lg:flex">
          <div className="btn btn-ghost normal-case text-md">
            Boba Stock: {totalPearl}
          </div>
          <div className="btn btn-ghost normal-case text-md">
            Lychee Stock: {totalLychee}
          </div>
          <div className="btn btn-ghost normal-case text-md">
            Pudding Stock: {totalPudding}
          </div>
          <div className="btn btn-ghost normal-case text-md">
            Red Bean Stock: {totalRedBean}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Header.propTypes = {
  totalPearl: PropTypes.number.isRequired,
  totalLychee: PropTypes.number.isRequired,
  totalPudding: PropTypes.number.isRequired,
  totalRedBean: PropTypes.number.isRequired,
  toggleFullVisibility: PropTypes.func.isRequired,
  toggleView: PropTypes.func.isRequired,
};

export default Header;
