import oceanicNext from "prism-react-renderer/themes/oceanicNext";
import { FlexBox, Heading, Text, CodeSpan } from "spectacle";

function Slide8() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <Heading>Platform specific code</Heading>
      <Text fontSize="40px">Using Platform-specific extensions</Text>
      <Text fontSize="30px">
        For example, say you have the following files in your project:
      </Text>
      <CodeSpan language="javascript" theme={oceanicNext} fontSize="30px">{`
      BigButton.ios.js,
      BigButton.android.js      
      `}</CodeSpan>
      <Text fontSize="30px">
        You can then require the component as follows:
      </Text>
      <CodeSpan language="javascript" theme={oceanicNext} fontSize="30px">{`
      import BigButton from './BigButton';
      `}</CodeSpan>
    </FlexBox>
  );
}

export default Slide8;
