import React from "react";

function Header() {
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
            Boba Remaining: {}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;
