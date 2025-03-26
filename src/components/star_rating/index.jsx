import styled from "styled-components";
import { FaStar } from "react-icons/fa";

export default function StarRating() {
  return (
    <Container>
      <Heading>STAR RATING</Heading>
      <StarContainer>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </StarContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
`;

const Heading = styled.h3`
  font-weight: 200;
  font-size: 30px;
  padding: 5px;
`;

const StarContainer = styled.div`
  margin: 30px;
`;

const Star = styled(FaStar)`
  color: white;
  font-size: 60px;
  stroke: black;
  stroke-width: 3px;
`;
