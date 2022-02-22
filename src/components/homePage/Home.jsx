import React from "react";
import { Banner } from "../banner/banner";
import { Timer } from "../timer/Timer";
import { Trails } from "../trails/Trails";
import { PromoVideo } from "../promoVideo/PromoVideo";

export const Home = () => {
  return (
    <div>
      <Banner />
      <Timer />
      <Trails />
      <PromoVideo />
    </div>
  );
};
