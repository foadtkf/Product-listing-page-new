import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../State/actioncreators/index";

const Tasty = () => {
  const dispatch = useDispatch();
  const { incValue, decValue } = bindActionCreators(actionCreators, dispatch);
  return (
    <div className=" mx-[20%] ">
      <h1 className="text-9xl p-10 text-center font-bold">
        <span className="text-white hover:text-red-500 hover:bg-black bg-primary rounded-full px-[8%]">
          R
        </span>
        edux practice
      </h1>

      <div className="flex justify-center">
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            dispatch(incValue(10));
          }}
        >
          +
        </button>
        <h1>Add items</h1>
        <button
          className="btn btn-primary btn-sm"
          onClick={() => {
            dispatch(decValue(10));
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Tasty;
