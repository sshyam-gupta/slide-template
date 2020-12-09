import { Deck, Slide } from "spectacle";

import customTheme from "./theme/default-theme";
import template from "./theme/template";

import Slide1 from "./slides/slide1";
import Slide2 from "./slides/slide2";
import Slide3 from "./slides/slide3";
import Slide4 from "./slides/slide4";
import Slide5 from "./slides/slide5";
import Slide6 from "./slides/slide6";
import Slide7 from "./slides/slide7";
import Slide8 from "./slides/slide8";
import Slide9 from "./slides/slide9";
// import Slide10 from "./slides/slide10";
import Slide11 from "./slides/slide11";
import Slide12 from "./slides/slide12";
import Slide13 from "./slides/slide13";
import Slide14 from "./slides/slide14";
import ArchitectureSlide from "./slides/architecture";

function App() {
  return (
    <Deck theme={customTheme} template={template}>
      <Slide>
        <Slide1 />
      </Slide>
      <Slide>
        <Slide2 />
      </Slide>
      <Slide>
        <Slide3 />
      </Slide>
      <Slide>
        <ArchitectureSlide />
      </Slide>
      <Slide>
        <Slide4 />
      </Slide>
      <Slide>
        <Slide5 />
      </Slide>
      <Slide>
        <Slide6 />
      </Slide>
      <Slide>
        <Slide7 />
      </Slide>
      <Slide>
        <Slide8 />
      </Slide>
      <Slide>
        <Slide9 />
      </Slide>
      {/* <Slide>
        <Slide10 />
      </Slide> */}
      <Slide>
        <Slide11 />
      </Slide>
      <Slide>
        <Slide12 />
      </Slide>
      <Slide>
        <Slide13 />
      </Slide>
      <Slide>
        <Slide14 />
      </Slide>
    </Deck>
  );
}
export default App;
