import React from "react";
import { styled } from "styled-components";
import { COLORS } from "theme";

const CartItem = ({ data }) => {
  return (
    <CartItemWrapper>
      <CartItemImg>
        <img src={data.imgSrc} alt="" />
      </CartItemImg>
      <CartItemContent>
        <p>{data.title}</p>
        <p
          style={{
            color: "#B1b1b1",
          }}
        >
          {data.weight}г
        </p>
        <p style={{}}>{data.price}₽</p>
      </CartItemContent>
      <CartItemCount>{data.count}</CartItemCount>
    </CartItemWrapper>
  );
};

export default CartItem;

const CartItemWrapper = styled.div`
  padding: 15px 0;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
`;

const CartItemImg = styled.div`
  flex: 1;
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
const CartItemContent = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-self: stretch;

  p {
    display: block;
  }

  p:last-child {
    margin-top: auto;
  }
`;
const CartItemCount = styled.div`
  padding: 9px 0;
  border-radius: 12px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  background-color: ${COLORS.grey};
`;
