import React from "react";
import { data } from "../../data/allData";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  margin-bottom: 50px;
`;
const Left = styled.div`
  display: grid;
  grid-template-columns: 48% 48%;
  place-content: center;
  gap: 20px;
`;
const Right = styled.div``;

export const SingleProduct = () => {
  let { id } = useParams();
  let products = data();
  let prod;
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === id) {
      prod = products[i];
      break;
    }
  }
  return (
    <Main>
      <Left>
        {prod.images.map((img, i) => {
          return <img key={i} src={img} alt="" />;
        })}
      </Left>
      <Right>
        <h2>{prod.tagName}</h2>
        <h1>{prod.title}</h1>
        <div>
          <span className="prod-price">{prod.price}</span>
          <span className="cut-price">{prod.cutPrice}</span>
          <span className="discount-price">
            {((100 * prod.price) / prod.cutPrice).toFixed()}
          </span>
        </div>
        <p>{prod.description}</p>
        <div className="choose-size">
          Choose Size
          <span className="size-red">(Size Guide)</span>
        </div>
        <div className="sizes">
          <span>S</span>
          <span>M</span>
          <span>L</span>
          <span>XL</span>
          <span>XXL</span>
        </div>
        <div className="buttons">
          <div className="add-cart">Add to Cart</div>
          <div className="view-cart">View Cart (1)</div>
        </div>
      </Right>
    </Main>
  );
};
