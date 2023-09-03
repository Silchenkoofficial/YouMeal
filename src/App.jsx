import React from "react";

import "./styles.css";
import { Button } from "Components";
import { Cart, Categories } from "Widgets";
import { Container, Main } from "Layouts";
import { TopSection } from "Sections";

function App() {
  return (
    <div>
      <TopSection />
      <Container>
        <Categories />
        <Main>
          <Cart />
          <div
            style={{
              flex: 3,
            }}
          ></div>
        </Main>
      </Container>
    </div>
  );
}

export default App;
