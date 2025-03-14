import styled from "styled-components";
import { useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  function handleRandomColor() {}

  return (
    <Container bgColor={color}>
      <ButtonContainer>
        <Heading>RANDOM COLOR GENERATOR</Heading>
        <Button onClick={handleRandomColor}>Get Random Color</Button>
        <Button onClick={() => setTypeOfColor("hex")}>HEX Color</Button>
        <Button onClick={() => setTypeOfColor("rgb")}>RGB Color</Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 200px;
  width: 100vw;
  height: 600px;
  border: 1px solid black;
  background-color: ${(props) => props.bgColor};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const Heading = styled.h3`
  font-weight: 200;
  font-size: 30px;
  background: white;
  padding: 5px;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #0f0a0a;
  color: white;
  border: none;
  cursor: pointer;
  border: 1px solid white;
`;
