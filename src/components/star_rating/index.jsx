import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleRating(currentIndex) {
    setRating(currentIndex + 1);
  }
  function handleMouseMove(currentIndex) {
    setHover(currentIndex + 1);
  }

  function handleMouseLeave() {
    setHover(0);
  }

  return (
    <Container>
      <Heading>STAR RATING</Heading>
      <StarContainer>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            onClick={() => handleRating(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={handleMouseLeave}
            isFilled={hover > index || rating > index}
          />
        ))}
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
  color: ${({ isFilled }) => (isFilled ? "gold" : "white")};
  font-size: 60px;
  stroke: black;
  stroke-width: 3px;
  cursor: pointer;

  &:hover {
    color: gold;
    stroke: gold;
  }
`;
