import Accordion from "./components/accordion";
import RandomColor from "./components/random_color";
import styled from "styled-components";

function App() {
  return (
    <div>
      <Heading>React Projects for Practice</Heading>
      <Accordion />
      <RandomColor />
    </div>
  );
}

export default App;

const Heading = styled.h1`
  text-align: center;
  font-size: 50px;
  font-weight: 150;
  margin-bottom: 70px;
`;
