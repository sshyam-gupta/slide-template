import { Box, FlexBox, FullScreen, Progress } from "spectacle";
import customTheme from "./default-theme";

const template = () => (
  <>
    <FlexBox position="absolute" bottom={0} right={0}>
      <Box padding="1em">
        <Progress color={customTheme.colors.quinary} />
      </Box>
    </FlexBox>
    <FlexBox position="absolute" bottom={0} left={0}>
      <Box padding="1em">
        <img
          src="https://kiprosh.com/images/favicon.png"
          alt="Kiprosh Logo"
          className="app-logo"
        />
      </Box>
    </FlexBox>
    <FlexBox position="absolute" top={0} right={0}>
      <Box padding="0 1em">
        <FullScreen color={customTheme.colors.quinary} />
      </Box>
    </FlexBox>
  </>
);

export default template;
