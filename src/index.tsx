import { createStore } from "solid-js/store";
import { render } from "solid-js/web";
import { styled } from "solid-styled-components";
import { UI } from "./components/landing";

const App = () => {
  const [state, setState] = createStore({ name: "Solid", bold: true });
 
  return (
    <UI></UI>
  );
};

render(App, document.getElementById("app"));
