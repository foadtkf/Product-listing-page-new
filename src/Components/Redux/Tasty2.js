import React from "react";
import { useSelector } from "react-redux";

const Tasty2 = () => {
  const amount = useSelector((state) => state.amount);
  return (
    <div>
      <h1 className="text-center text-5xl">
        <span style={{ fontFamily: "Press Start 2P" }}>{amount}</span>
      </h1>
    </div>
  );
};

export default Tasty2;
