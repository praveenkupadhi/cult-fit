import React from "react";
import { Link } from "react-router-dom";

export const SecondaryNav = () => {
  return (
    <div className="w-full flex ">
      <div className="flex h-2 space-x-1">
        <Link to="/">
          <button className=" "> care</button>
        </Link>
      </div>
    </div>
  );
};
