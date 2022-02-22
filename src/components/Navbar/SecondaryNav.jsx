import React from "react";
import { Link } from "react-router-dom";

export const SecondaryNav = () => {
  return (
    <div
      style={{
        background: "red",
      }}
      className="w-full flex justify-center bg-black"
    >
      <div className=" w-3/6 justify-center flex ">
        <Link to="/">
          <button className=" "> care</button>
        </Link>
      </div>
    </div>
  );
};
