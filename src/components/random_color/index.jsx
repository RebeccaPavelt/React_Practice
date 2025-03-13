import styled from "styled-components";

export default function RandomColor() {
  return (
    <Container>
      <ButtonContainer>
        <Heading>RANDOM COLOR GENERATOR</Heading>
        <Button>Get Random Color</Button>
        <Button>HEX Color</Button>
        <Button>RGB Color</Button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 200px;
  width: 100vw;
  height: 600px;
  border: 1px solid black;
  background-color: #f4b238;
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
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #0f0a0a;
  color: white;
  border: none;
  cursor: pointer;
`;
