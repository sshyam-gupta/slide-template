import { Deck, Slide } from "spectacle";
import Slide1 from "./slides/slide1";
import customTheme from "./theme/default-theme";
import template from "./theme/template";

function App() {
  return (
    <Deck theme={customTheme} template={template}>
      <Slide>
        <Slide1 />
      </Slide>
      <Slide>
        <Slide1 />
      </Slide>
      <Slide>
        <Slide1 />
      </Slide>
    </Deck>
  );
}
export default App;
