import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 150px;
  background: #ffb400;
  color: #fff;
  font-size: 100px;
`;

function App() {
  const breakPoint = [{ width: 1, itemsToShow: 1 }];
  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "50px 0 20px 0" }}>Carousel</h1>
      <div className="App">
        <Carousel breakPoint={breakPoint}>
          <Item>1</Item>
          <Item>2</Item>
          <Item>3</Item>
          <Item>4</Item>
          <Item>5</Item>
          <Item>6</Item>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
