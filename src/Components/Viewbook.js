import React from "react";
import { useParams } from "react-router-dom";

function Viewbook() {
  const { id } = useParams();
  return (
    <div>
      ViewBook details : from {id}
      <div className="fs-1">DETAILS yet to be updated</div>
    </div>
  );
}

export default Viewbook;
