import { HeroSec } from "../componentSection/heroContainer/HeroSec";
import { NavCat } from "../componentSection/navCategory/NavCat";
export const Home = () => {
  let cult = {
    logo_img: "https://static.cure.fit/assets/images/cult-brand.svg",
    title: "Makes fitness fun and easy",
    description:
      "Try our fun group classes at our cult centers or work out at best-in-class gyms",
    img1: {
      title: "Find a cult center near you",
      description:
        "Work out at our world class cult centers with the safest measures. From ample workout space to ensure social distancing to frequent sanitisation, cult is playing it safe so you don't have to.",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/6285c073-5e3d-4abf-9189-21403628a1f4.png",
    },
    img2: {
      title: "Find a cult center near you",
      description:
        "Get unlimited access to the best gyms in town with a cultpass. Carefully handpicked by cult, these select gyms boast of cult certified trainers, best-in-class safety and equipment standards.",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/f66c717a-bcb9-4d64-b227-115d1010b610.jpeg",
    },
    img3: {
      title: "Find a cult center near you",
      description:
        "Personalised workout sessions with the best of cult trainers to help you achieve your fitness goals from the comfort of home.",
      src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_600,h_470,fl_progressive,f_auto,q_auto:eco/dpr_2/image/vm/aedcb538-777e-4564-b422-30eb8dc220d2.png",
    },
  };
  return (
    <div>
      <HeroSec />
      <NavCat data={cult} />
    </div>
  );
};
