import React from "react";

import BurgerIcon from "assets/icons/burgers.svg";
import SnacksIcon from "assets/icons/snacks.svg";
import HotDogIcon from "assets/icons/hotdog.svg";
import ComboIcon from "assets/icons/combo.svg";
import ShawarmaIcon from "assets/icons/shawarma.svg";
import PizzaIcon from "assets/icons/pizza.svg";
import WokIcon from "assets/icons/wok.svg";
import DessertsIcon from "assets/icons/desserts.svg";
import SaucesIcon from "assets/icons/sauces.svg";
import { Chip } from "Components";
import { styled } from "styled-components";

const chips = [
  {
    icon: <img src={BurgerIcon} alt="" />,
    title: "Бургеры",
  },
  {
    icon: <img src={SnacksIcon} alt="" />,
    title: "Закуски",
  },
  {
    icon: <img src={HotDogIcon} alt="" />,
    title: "Хот-доги",
  },
  {
    icon: <img src={ComboIcon} alt="" />,
    title: "Комбо",
  },
  {
    icon: <img src={ShawarmaIcon} alt="" />,
    title: "Шаурма",
  },
  {
    icon: <img src={PizzaIcon} alt="" />,
    title: "Пицца",
  },
  {
    icon: <img src={WokIcon} alt="" />,
    title: "Вок",
  },
  {
    icon: <img src={DessertsIcon} alt="" />,
    title: "Десерты",
  },
  {
    icon: <img src={SaucesIcon} alt="" />,
    title: "Соусы",
  },
];

const Categories = () => {
  const [activeChip, setActiveChip] = React.useState(chips[0].title);

  const handleChangeChip = (title) => setActiveChip(title);
  return (
    <CategoriesWrapper>
      {chips.map((el) => (
        <Chip
          key={el.title}
          onClick={() => handleChangeChip(el.title)}
          isActive={activeChip === el.title ? 1 : 0}
        >
          {el.icon}
          {el.title}
        </Chip>
      ))}
    </CategoriesWrapper>
  );
};

export default Categories;

const CategoriesWrapper = styled.div`
  padding: 16px 0;
  width: 100%;
  overflow-x: scroll;
  display: flex;
  align-items: center;
  gap: 24px;
`;
