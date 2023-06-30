import React, { useState } from "react";

function BobaForm({ restock }) {
  const [selectedTopping, setSelectedTopping] = useState("");

  const handleDropdownChange = (event) => {
    setSelectedTopping(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="flex flex-col justify-center items-center gap-4">
        <select
          value={selectedTopping}
          onChange={handleDropdownChange}
          className="select w-64 mt-4 outline outline-accent focus:outline-pink-300"
        >
          <option value="">Select Topping</option>
          <option value="pearl">Pearl</option>
          <option value="lychee">Lychee</option>
          <option value="pudding">Pudding</option>
          <option value="red bean">Red Bean</option>
        </select>
        <button
          onClick={() => restock(selectedTopping)}
          className="btn btn-accent btn-wide mt-4"
        >
          Restock
        </button>
      </div>
    </React.Fragment>
  );
}

export default BobaForm;
