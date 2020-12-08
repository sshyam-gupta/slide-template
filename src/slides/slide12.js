import { FlexBox, Heading, Link, UnorderedList, ListItem } from "spectacle";

function Slide12() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <Heading>Whats more!</Heading>
      <UnorderedList>
        <ListItem>
          <Link
            href="https://microsoft.github.io/react-native-windows/"
            target="_blank"
            rel="noopener"
          >
            React Native for Windows + macOS
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://reactnative.dev/showcase"
            target="_blank"
            rel="noopener"
          >
            Showcase of RN apps
          </Link>
        </ListItem>
      </UnorderedList>
    </FlexBox>
  );
}

export default Slide12;
