import React from "react";
import { Banner } from "../banner/banner";
import { Timer } from "../timer/Timer";
import { Trails } from "../trails/Trails";
import { PromoVideo } from "../promoVideo/PromoVideo";

export const Gyms = () => {
  const image = {
    src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/8493f704-baba-48e4-9ae6-180ca10f8c5c.png",
  };
  const timeData = {
    img: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_1360:100/dpr_2/image/vm/4df19379-6ae5-4d76-8b07-35f46c80f921.png",
    arrow: "https://static.cure.fit/assets/images/back-arrow-pink.svg",
  };
  return (
    <div>
      <Banner image={image} />
      <Timer timeData={timeData} />
      <Trails />
      <PromoVideo />
    </div>
  );
};
