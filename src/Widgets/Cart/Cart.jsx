import React from "react";
import { styled } from "styled-components";
import { COLORS } from "theme";
import CartItem from "./CartItem";
import { Button } from "Components";

import DeliveryIcon from "assets/icons/delivery.svg";
import axios from "axios";

const data = [
  {
    title: "Супер сырный",
    imgSrc: "/src/assets/burgers/cheeseburger.jpg",
    weight: 512,
    price: 550,
    count: 1,
  },
];

const Cart = () => {
  const [imagePath, setImagePath] = React.useState("");

  React.useEffect(() => {
    axios.get("http://localhost:3000/burgers").then((res) => {
      setImagePath(res.data[0].image);
    });
  }, [imagePath]);
  return (
    <CartWrapper>
      <CartHeader>
        <CartHeaderTitle>Корзина</CartHeaderTitle>
        <CartCountItem>4</CartCountItem>
      </CartHeader>
      <CartContent>
        <CartItem data={data[0]} />
        <CartItem data={data[0]} />
        <CartItem data={data[0]} />
      </CartContent>
      <CartFooter>
        <CartFooterAmount>
          <p>Итого:</p>
          <p>1279₽</p>
        </CartFooterAmount>
        <Button full={1}>Оформить заказ</Button>
        <CartFooterDelivery>
          <img src={DeliveryIcon} alt="" />
          Бесплатная доставка
        </CartFooterDelivery>
      </CartFooter>
    </CartWrapper>
  );
};

export default Cart;

const CartWrapper = styled.div`
  padding: 24px 16px;
  border-radius: 18px;
  flex: 1;
  background-color: #fff;
`;
const CartHeader = styled.div`
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CartContent = styled.div`
  & > * {
    border-top: 1px solid ${COLORS.grey};
  }
  & > :last-child {
    border-bottom: 1px solid ${COLORS.grey};
  }
`;
const CartFooter = styled.div``;
const CartFooterAmount = styled.div`
  margin: 16px 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CartFooterDelivery = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CartHeaderTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
`;

const CartCountItem = styled.div`
  padding: 2px 16px;
  border-radius: 6px;
  font-size: 12px;
  background-color: ${COLORS.grey};
`;
