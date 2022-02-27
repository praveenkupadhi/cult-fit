import { useState } from "react";
import styled from "styled-components";
import { Banner } from "../componentSection/banner/banner";
import { ShowProducts } from "../componentSection/showProducts/ShowProducts";

const H1 = styled.div`
  font-family: BrandonTextWeb-Medium, "Helvetica Neue", Helvetica, Roboto, Arial,
    sans-serif;
  font-size: 24px;
  width: 1200px;
  margin: auto;
  margin-top: 50px;
  letter-spacing: -0.2px;
  padding: 0px 0px 30px;
  color: black;
`;
const MealNav = styled.div`
  display: flex;
  width: 1200px;
  margin: auto;
  & > div {
    list-style: none;
    cursor: pointer;
    margin-right: 43px;
    font-size: 16px;
    color: rgb(163, 163, 163);
    padding: 10px 15px;
  }
  & > .active {
    color: black;
    padding: 10px 15px;
    border-bottom: 4px solid rgb(255, 50, 120);
  }
`;
export const Order = () => {
  const [nav, setNav] = useState({
    one: true,
    two: false,
    three: false,
    four: false,
  });
  let Breakfast = [
    {
      id: 1,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6719/primary/1_1.jpg",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/LLhQ1gM3qGRTdh28N7e75NEY",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/rev2EFN2NizpFFhzCHqTeQXt",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/16NEEv118n71q7E2YryYaoz4",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/brMDNpR5yex5FQrW6QUg6JeA",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/9jUo2pHR41U8Q177KStwWFav",
      ],
      tagName: "CULTSPORT",
      title: "Vitals Lifestyle Polo Tshirt",
      category: "men",
      price: 59,
      cutPrice: 1799,
      description:
        "Not so classic polo T-shirt. This polo is made for preppy and versatile outfit just for you. Accented by signature branding , contrast details & super comfortable styling.",
      PRODUCT_DETAILS: [
        {
          Colour: "Black",
          Fabric: "100% Cotton",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
        },
      ],
    },

    {
      id: 2,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6612/primary/2_1.jpg",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/cFRw2pYDz5h5zrpLwPiG3M8o",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/qT2aVJogwuFyNSqrPjfwUYcU",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/CRzg5uxrf59uJUHeD43bWqb8",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/NFCeGGgTAaHCwcrVDsjXk2eL",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/tYthH6YYRHMF6nHpKmK5DvB1",
      ],
      tagName: "CULTSPORT",
      title: "Vitals Lifestyle  Tshirt",
      category: "men",
      price: 99,
      cutPrice: 1399,
      description:
        "Give fitness fashion a new meaning with the this crew neck running Tshirt. With fabric that lets you breathe without restriction, combines the sweat-wicking Flydry technology and supersoft feel.",
      PRODUCT_DETAILS: [
        {
          Colour: "Black",
          Fabric: "100% Cotton",
          washing: "Bio Wash",
          Flydry: "sweat-wicking tech to keep your workouts dry",
        },
      ],
    },

    {
      id: 3,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6614/primary/2_1.jpg",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/VSDBZp4SRdnqy4L68hMBDa8d",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/KX2MoPjaiM7gpdSLZXGosYW6",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/GobfXpdCiBekhNFZyiMo76b2",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/dvQDL8fQM5Lo1jDdyMSUKcVJ",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/FJEZRMmT9dgFP1ikwnpk63jN",
      ],
      tagName: "CULTSPORT",
      title: "Vitals Lifestyle  Tshirt",
      category: "men",
      price: 94,
      cutPrice: 1399,
      description:
        "Give fitness fashion a new meaning with the this crew neck running Tshirt. With fabric that lets you breathe without restriction, combines the sweat-wicking Flydry technology and supersoft feel.",
      PRODUCT_DETAILS: [
        {
          Colour: "Black",
          Fabric: "100% Cotton",
          washing: "Bio Wash",
          Flydry: "sweat-wicking tech to keep your workouts dry",
        },
      ],
    },

    {
      id: 4,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6672/primary/3_1.jpg",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/EBbVJmcR8UTq636F7XFmaZcr",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/C68PqZyEN4tQUVhnMp2cxT93",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/XGdA6cFX8LjPDakhb1vxLj1R",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/GpewJC7r6jXVNEXvvCiCqcRd",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/ZFLcUzyPZGQ9eDYfbAj3udjx",
      ],
      tagName: "CULTSPORT",
      title: "Vitals Lifestyle Polo Tshirt",
      category: "men",
      price: 136,
      cutPrice: 1399,
      description:
        "Give fitness fashion a new meaning with the this crew neck running Tshirt. With fabric that lets you breathe without restriction, combines the sweat-wicking Flydry technology and supersoft feel.",
      PRODUCT_DETAILS: [
        {
          Colour: "Black",
          Fabric: "100% Cotton",
          washing: "Bio Wash",
          Flydry: "sweat-wicking tech to keep your workouts dry",
        },
      ],
    },

    {
      id: 5,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6524/primary/4_1.jpg",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/2Mnh3FN6bdHWEByk1JDaNpdV",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/cVPwhuSPr3JNTimhUC1pxTuw",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/a8h5FR7x5ccpWHzKp6bHsabj",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/VeqxAoZbUNCW8tJvssygsPn6",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/GSJQCoSteSuPXdSSvvvDQmfi",
      ],
      tagName: "CULTSPORT",
      title: "Vitals Solid Running T-Shirt",
      category: "men",
      price: 974,
      cutPrice: 99,
      description:
        "Confer a sporty edge to your running attire with this Tshirt with FlyDry technology to keep you dry no matter how much you sweat.It's also lightweight and breathable to make your run more comfortable.",
      PRODUCT_DETAILS: [
        {
          Colour: "Black",
          Fabric: "100% Cotton",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
        },
      ],
    },

    {
      id: 6,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6618/primary/4_1.jpg",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/APpht9sHHHEyaFr8oHVzi8Am",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/AX92rJNwtpdgeBhewL9oeUnw",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/QFjApgQ6BAADRCRfRqSMrH4v",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/jdReqPLMJ8FgekofCT1vPtc2",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/g5GeHjJGmzHr3qqz2KcWSuR9",
      ],
      tagName: "CULTSPORT",
      title: "Vitals Logo Running T-Shirt",
      category: "men",
      price: 54,
      cutPrice: 1499,
      description:
        "Confer a sporty edge to your running attire with this Tshirt with FlyDry technology to keep you dry no matter how much you sweat.It's also lightweight and breathable to make your run more comfortable.",
      PRODUCT_DETAILS: [
        {
          Colour: "Grey",
          Fabric: "100% Polyester",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
        },
      ],
    },

    {
      id: 7,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6109/primary/9_1.jpg",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/fwwFQY9kMMPYJzVRXa5GERPt",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/KKwn6a9bExuRcrKnVkF2WCb4",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/ZezqS6tntkzSrt2ZhPQsJJWX",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/9WGydNfpfJjPM9vLzrK1WEJb",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/cyTHwYnSfZh9Hv9BM8Zos77E",
      ],
      tagName: "CULTSPORT",
      title: "Vitals Logo Running T-Shirt",
      category: "men",
      price: 74,
      cutPrice: 129,
      description:
        "Amp your fitness wardrobe with this Graphic Print crew neck workout t-shirt. With fabric that lets you breathe without restriction, this t-shirt keeps up with your active life!",
      PRODUCT_DETAILS: [
        {
          Colour: "Blue",
          Fabric: "100% Polyester",
          washing: "Bio Wash",
          Flydry: "sweat-wicking tech to keep your workouts dry",
        },
      ],
    },

    {
      id: 8,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_295,ar_1.33,fl_progressive,f_auto,q_auto:eco/dpr_2/image/singles/eat/meals/EAT6712/primary/3_1.jpg",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/ou4GPuZob55Us8BvnCqzqjwE",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/K2y71ziBphqfztCN9fhjiVDz",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/puqnsGVnqAHiKpW2iJ4udzKb",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/EaB1LmzUevk8dM62ftTW1LFE",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/q8rAxToCCdMddMf4FhPCsmve",
      ],
      tagName: "CULTSPORT",
      title: "Vitals Graphic Running T-Shirt",
      category: "men",
      price: 109,
      cutPrice: 109,
      description:
        "Run your own race, defy the norms and cook up a storm in this workout T-shirt.Meant to move with you, this combines design and technology to deliver a performance as impressive as yours.",
      PRODUCT_DETAILS: [
        {
          Colour: "Blue",
          Fabric: "65% Cotton, 35% Polyester",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
          Flydry: "sweat-wicking tech to keep your workouts dry",
        },
      ],
    },

    {
      id: 9,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_221,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/packs/eat/BREAKFAST_VEG/6_mag_web.jpg",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/1TFhUFGWYcgeehQAxb8T9szy",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/jaqMe5eGqXTPV3gsTDHjWDwo",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/VecG5XxMmhq8Lfs7AQUL2msZ",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/EiEJ4tZBJDTZMxLaxqgdbfXa",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/sGTNduLUk92GVG8yYwvb7bx4",
      ],
      tagName: "CULTSPORT",
      title: "Vitals Logo Running T-Shirt",
      category: "men",
      price: 103,
      cutPrice: 1299,
      description:
        "Not so classic polo T-shirt. This polo is made for preppy and versatile outfit just for you. Accented by signature branding , contrast details & super comfortable styling.",
      PRODUCT_DETAILS: [
        {
          Colour: "Peach",
          Fabric: "65% Cotton, 35% Polyester",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
        },
      ],
    },

    {
      id: 10,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/w_221,ar_0.8,fl_progressive,f_auto,q_auto:eco/dpr_2/image/packs/eat/WEIGHT_WISE_hEALTH_JAR/5_mag_web.jpg",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/2Db6tZeeKgXr6Cjwpu9AP34Y",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/WQLEj6xY64bTtgvrRLTQ5vBX",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/HHJ1qPvMzunFkQEsc7g67EBH",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/7mnccXmpqAuzsnbFKPTU4cid",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/3VNuanpjP9t4gm1iMuKAPKiU",
      ],
      tagName: "CULTSPORT",
      title: "Layr Lifestyle Sweatshirt",
      category: "men",
      price: 184,
      cutPrice: 2899,
      description:
        "Beat the chills and say hello to the toasty winters with the Cultsport Lifestyle Sweatshirt. Designed to be the perfect 2nd layer 365 days a year. Its time to get all snuggled up",
      PRODUCT_DETAILS: [
        {
          Colour: "Grey",
          Fabric: "95% Cotton 5% Spandex",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
        },
      ],
    },
  ];
  let data = [
    {
      id: 1,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/LEE997UW5WoFdSdjAzdrD2ZT",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/JWNw5EV8a91gJ1qGbvoxqMMn",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/n6kV7MwMVCEDXkSBk2Bbyqsm",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/CCZYSgaC54quasyDKUfLCytr",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/yFU67CtY7eUeBLaFLJRfm1W1",
      ],
      tagName: "CULTSPORT",
      title: "Seamless Diane Medium Impact Sports Bra",
      category: "women",
      price: 1379,
      cutPrice: 2299,
      description:
        "This Sports Bra is made using seamless technology to prevent chafing and irritation meaning there are no seams to cause discomfort. Whether using the sports bra during a run, yoga, or gym class, this will be the most comfortable sports bra you will ever use.Seamless stitching and sweat-wicking fabric ensures ultimate comfort while exercising.",
      PRODUCT_DETAILS: [
        {
          Colour: "Dark Grey",
          Fabric: "48% Nylon 43% Polyester 9% Spandex",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
        },
      ],
    },
    {
      id: 2,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/SiG27L1Ezj8W3tpWRXy7f5UQ",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/mrQ3KPykGbFuxqmu11hpb4WR",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/SNZesxnn4MVC27uYQz91rV5K",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/hDmikzYWdefbr867XDAwXXSy",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/LX9bPM89ZM1WCMbdy9LpyiP8",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/J8s23w5gDjfvBMR6Z4tTtwsQ",
      ],
      tagName: "CULTSPORT",
      title: "Seamless Gia Medium Impact Sports Bra",
      category: "women",
      price: 1180,
      cutPrice: 1899,
      description:
        "This Sports Bra is made using seamless technology to prevent chafing and irritation meaning there are no seams to cause discomfort. Whether using the sports bra during a run, yoga, or gym class, this will be the most comfortable sports bra you will ever use.Seamless stitching and sweat-wicking fabric ensures ultimate comfort while exercising.",
      PRODUCT_DETAILS: [
        {
          Colour: "Dark Green",
          Fabric: "48% Nylon 43% Polyester 9% Spandex",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
        },
      ],
    },
    {
      id: 3,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/vXcXZqdyw7FfusoD96upd2tc",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/NnD6BVCxqeujveQKVww8qf6J",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/rtpVYjtcKBCF5opHb9pS5JXK",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/3baf2XR74gtAKv4KDk435c4A",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/m9MRTBDk8wtAFxDfFNpRUwdh",
      ],
      tagName: "CULTSPORT",
      title: "Seamless Jules Medium Impact Sports Bra",
      category: "women",
      price: 1379,
      cutPrice: 2299,
      description:
        "This Sports Bra is made using seamless technology to prevent chafing and irritation meaning there are no seams to cause discomfort. Whether using the sports bra during a run, yoga, or gym class, this will be the most comfortable sports bra you will ever use.Seamless stitching and sweat-wicking fabric ensures ultimate comfort while exercising.",
      PRODUCT_DETAILS: [
        {
          Colour: "Purple",
          Fabric: "48% Nylon 43% Polyester 9% Spandex",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
        },
      ],
    },
    {
      id: 4,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/JDj54fJCDJEJpEL26gNbGmV9",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/YDZ1EqMqAmVdGCB3M5GdyT2X",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/eSqFuoXACjXg68JzksEoGH1i",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/Dn5upuAL6MQ5wffEC57h9Phx",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/MoyzrA67FfVhCBr1afXJy5BE",
      ],
      tagName: "CULTSPORT",
      title: "Seamless Nia Medium Impact Sports Bra",
      category: "women",
      price: 1049,
      cutPrice: 1799,
      description:
        "This Sports Bra is made using seamless technology to prevent chafing and irritation meaning there are no seams to cause discomfort. Whether using the sports bra during a run, yoga, or gym class, this will be the most comfortable sports bra you will ever use.Seamless stitching and sweat-wicking fabric ensures ultimate comfort while exercising.",
      PRODUCT_DETAILS: [
        {
          Colour: "Black",
          Fabric: "48% Nylon 43% Polyester 9% Spandex",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
        },
      ],
    },
    {
      id: 5,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/uh8SbgBje9CWa97CPGGmk7tm",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/nmQ9HFvqRtyMUWpBbTH7AcrX",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/NkJJCq6LpRpit5HcXLwBE4BU",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/wd4SqBb8vMoiAcTu1xp7aGNj",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/Xpp2Qhr7QSwpQucjxNLHPbFo",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/6KFdeH14ctNSzC2Wjd5K8EK6",
      ],
      tagName: "CULTSPORT",
      title: "Seamless Viola Medium Impact Sports Bra",
      category: "women",
      price: 1180,
      cutPrice: 1799,
      description:
        "This Sports Bra is made using seamless technology to prevent chafing and irritation meaning there are no seams to cause discomfort. Whether using the sports bra during a run, yoga, or gym class, this will be the most comfortable sports bra you will ever use.Seamless stitching and sweat-wicking fabric ensures ultimate comfort while exercising.",
      PRODUCT_DETAILS: [
        {
          Colour: "Red",
          Fabric: "60% Nylon 35% Polyester 5% Spandex",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
        },
      ],
    },
    {
      id: 6,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/c5ax2hsPK9dZbj9zMgMDaE7o",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/2nhBbWKULs9R3k6jxbM3mLn6",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/mkWCbwiMCWFsrW3aSewTMKEm",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/mYPoazGo3BDkhzPG9Az7TUL4",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/QNgVWgfmFMw4Cuibir4i55zh",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/Mukd8YuxDjtshRHdtrVBFXR7",
      ],
      tagName: "CULTSPORT",
      title: "Seamless Reese Medium Impact Sports Bra",
      category: "women",
      price: 1080,
      cutPrice: 1799,
      description:
        "This Sports Bra is made using seamless technology to prevent chafing and irritation meaning there are no seams to cause discomfort. Whether using the sports bra during a run, yoga, or gym class, this will be the most comfortable sports bra you will ever use.Seamless stitching and sweat-wicking fabric ensures ultimate comfort while exercising.",
      PRODUCT_DETAILS: [
        {
          Colour: "Black",
          Fabric: "60% Nylon 35% Polyester 5% Spandex",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
        },
      ],
    },
    {
      id: 7,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/qX6oagftsJaUkKyuHddpX7L5",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/nJxjmjtvtxNys6yaRtXEBKit",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/sXGZCLHBaSsk44vnV3r8dFPS",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/aeHhMaZwz9WJ9JEkL5CoMWAj",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/Fafq1shxmAJRGt9LPhHQQhVc",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/HgUgq2SZvdj1cCRL8yL2Ukgc",
      ],
      tagName: "CULTSPORT",
      title: "Seamless Tess Medium Impact Sports Bra",
      category: "women",
      price: 1080,
      cutPrice: 1799,
      description:
        "This Sports Bra is made using seamless technology to prevent chafing and irritation meaning there are no seams to cause discomfort. Whether using the sports bra during a run, yoga, or gym class, this will be the most comfortable sports bra you will ever use.Seamless stitching and sweat-wicking fabric ensures ultimate comfort while exercising",
      PRODUCT_DETAILS: [
        {
          Colour: "Dark Purple",
          Fabric: "60% Nylon 35% Polyester 5% Spandex",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
        },
      ],
    },
    {
      id: 8,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/1CMmPE77MMziuuta5vXssVMc",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/Rt2KMvu3NxyjJgRdXP8SWJen",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/5ioeg1btEEGz5LBagcyfvF21",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/WHy6y3LH4DdEVz4Cx9EU3yJU",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/x5B7ypZMJ99orq49x5iV6nB7",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/4vwA8Qfd4qqzJQbLWaWvXBrg",
      ],
      tagName: "CULTSPORT",
      title: "Tonal Print High Waist Tights",
      category: "women",
      price: 1580,
      cutPrice: 2599,
      description:
        "Groove into the ultimate dance fitness party of the season with our Absolute.fit tights in eclectic prints having the adjustability drawcord, no camel toe, anti slip broad waistband and the comfort to workout in style.",
      PRODUCT_DETAILS: [
        {
          Colour: "Blue",
          Fabric: "80% Polyester 20% Spandex",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
        },
      ],
    },
    {
      id: 9,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/rJT4dh8XpFEnF2XX8RCv7x9q",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/gTtCe8EWqz7fcCQbtZK4CjPT",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/5nC4aJb2mBqMxgiHJAWMEP9X",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/GicYVH7AifXjoyouv69Za37s",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/2JL9EW1xMAjkWesn9QShJWvQ",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/gmdSCgysW9PwcSzWJn1LUPdY",
      ],
      tagName: "CULTSPORT",
      title: "Neon Streak Print High Waist Tights",
      category: "women",
      price: 1689,
      cutPrice: 2599,
      description:
        "Groove into the ultimate dance fitness party of the season with our Absolute.fit tights in eclectic prints having the adjustability drawcord, no camel toe, anti slip broad waistband and the comfort to workout in style.",
      PRODUCT_DETAILS: [
        {
          Colour: "Purple",
          Fabric: "80% Polyester 20% Spandex",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
        },
      ],
    },
    {
      id: 10,
      images: [
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/ZjefBYYJtKtGqpd7PrPUJvZo",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/B4SjMH793ks7HzLhsUsYzmTq",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/bW31Vy14zRcwMLraFtC2vue4",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/LBLm7ZttUJ3Ah5KWog2VC31n",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/C2aNnUPZUmzCvMUy9AYzA8ow",
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_4:5,c_fill/dpr_2/cultgear-content/w9X8XwR7QQKPW7b1pdgreWMy",
      ],
      tagName: "CULTSPORT",
      title: "Graphic Print Workout Tshirt",
      category: "women",
      price: 1080,
      cutPrice: 1599,
      description:
        "Amp your fitness wardrobe with this Graphic Print crew neck workout t-shirt. With fabric that lets you breathe without restriction, this t-shirt keeps up with your active life!",
      PRODUCT_DETAILS: [
        {
          Colour: "Peach",
          Fabric: "98% Polyester, 2% Spandex",
          washing: "Bio Wash",
          Brand: "Signature Branding Details",
        },
      ],
    },
  ];
  const toggleNav = (value) => {
    setNav({
      ...{
        one: false,
        two: false,
        three: false,
        four: false,
      },
      [value]: true,
    });
  };
  const image = {
    src: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_1440,ar_2880:595/dpr_2/image/vm/e0bdda68-5d26-4e16-a69c-6c1b738b62cf.jpg",
  };
  return (
    <div>
      <Banner image={image} />
      <H1>Meal Plans</H1>
      <MealNav>
        <div
          onClick={() => toggleNav("one")}
          className={nav.one ? "active" : ""}
        >
          Breakfast
        </div>
        <div
          onClick={() => toggleNav("two")}
          className={nav.two ? "active" : ""}
        >
          Lunch
        </div>
        <div
          onClick={() => toggleNav("three")}
          className={nav.three ? "active" : ""}
        >
          Snacks
        </div>
        <div
          onClick={() => toggleNav("four")}
          className={nav.four ? "active" : ""}
        >
          Dinner
        </div>
      </MealNav>
      <ShowProducts data={nav.one ? Breakfast : data} />
    </div>
  );
};
