import React from "react";
import { styled } from "styled-components";
import { COLORS } from "theme";

import LogoIcon from "assets/icons/logo.svg";
import TopBG from "assets/topBG.png";

const TopSection = () => {
  return (
    <TopWrapper>
      <div>
        <img src={LogoIcon} alt="Logo" />
      </div>
      <TopTitle>
        <TopBurgerIMG src={TopBG} alt="" />
        <div>
          <h1>
            Только самые
            <br />
            <span
              style={{
                color: "#FF5C00",
              }}
            >
              сочные бургеры!
            </span>
          </h1>
          <p>Бесплатная доставка от 599₽</p>
        </div>
      </TopTitle>
    </TopWrapper>
  );
};

export default TopSection;

const TopWrapper = styled.div`
  padding: 24px;
  background-color: ${COLORS.secondary};
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TopTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const TopBurgerIMG = styled.img`
  max-width: 220px;
`;
