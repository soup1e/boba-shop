import React from "react";

function Header({ totalPearl, totalLychee, totalPudding, totalRedBean }) {
  return (
    <React.Fragment>
      <div className="navbar bg-base-300 ">
        <div className="flex-1">
          <button className="btn btn-ghost normal-case text-xl">
            Boba Shop
          </button>
        </div>
        <div className="flex-none">
          <div className="btn btn-ghost normal-case text-l">
            Boba Stock: {totalPearl}
          </div>
          <div className="btn btn-ghost normal-case text-l">
            Lychee Stock: {totalLychee}
          </div>
          <div className="btn btn-ghost normal-case text-l">
            Pudding Stock: {totalPudding}
          </div>
          <div className="btn btn-ghost normal-case text-l">
            Red Bean Stock: {totalRedBean}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
