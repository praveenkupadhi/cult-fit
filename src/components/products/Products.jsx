import React from "react";
import { useParams } from "react-router-dom";

export const Products = () => {
  const { cat } = useParams();
  console.log(cat);
  return <div className="text-9xl text-center">{cat}</div>;
};
