import { FlexBox, Heading, Link } from "spectacle";

function Slide9() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <FlexBox>
        <Heading>Styling your app</Heading>
        <Link
          target="_blank"
          rel="noopener"
          fontSize="20px"
          margin="5px"
          padding="0px"
          textAlign="center"
          href="https://snack.expo.io/@shyamm-kiprosh/styling"
        >
          🔗
        </Link>
      </FlexBox>
      <Link
        target="_blank"
        rel="noopener"
        fontSize="20px"
        margin="5px"
        padding="0px"
        textAlign="center"
        href="https://yogalayout.com/playground"
      >
        Yoga playground
      </Link>
      <Link
        target="_blank"
        rel="noopener"
        fontSize="20px"
        margin="5px"
        padding="0px"
        textAlign="center"
        href="https://medium.com/wix-engineering/the-full-react-native-layout-cheat-sheet-a4147802405c"
      >
        Cheatsheet
      </Link>
    </FlexBox>
  );
}

export default Slide9;
