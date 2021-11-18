import { createStore } from "solid-js/store";
import { render } from "solid-js/web";
import { styled } from "solid-styled-components";

const Div = styled("div")`
  color: red;
  font-size: 32px;
  padding: 5px;
  border: 2px solid black;
  background-color: white;
`;

const StyledDiv = styled(Div)`
  background-color: lightblue;
  font-weight: ${(props) => (props.bold ? "bold" : 100)};
`;


const App = () => {
  const [state, setState] = createStore({ name: "Solid", bold: true });
 
  return (
    <Div>

      Hello World

    </Div>
  );
};

render(App, document.getElementById("app"));
