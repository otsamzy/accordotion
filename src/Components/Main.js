import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Main = ({ title, info }) => {
  const [showInfo, setShowinfo] = useState(false);
  return (
    <>
      <div className="single_compartment">
        <div className="top_question">
          <h2>{title}</h2>
          <div className="btn_container" onClick={() => setShowinfo(!showInfo)}>
            {showInfo ? <FaMinus /> : <FaPlus />}
          </div>
        </div>
        {showInfo && (
          <div className="answers_compartment">
            <p className="answers">{info}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
