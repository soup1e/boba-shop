import React from "react";

function BobaForm({ restockBoba }) {
  return (
    <React.Fragment>
      <div className="flex justify-center items-center">
        <button onClick={restockBoba} className="btn btn-accent btn-wide mt-4">
          Restock
        </button>
      </div>
    </React.Fragment>
  );
}

export default BobaForm;
