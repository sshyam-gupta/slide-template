import { FlexBox, Heading, Link, UnorderedList, ListItem } from "spectacle";

function Slide13() {
  return (
    <FlexBox height="100%" flexDirection="column">
      <Heading>References</Heading>
      <UnorderedList>
        <ListItem>
          <Link href="https://reactnative.dev/" target="_blank" rel="noopener">
            React native docs
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.youtube.com/watch?v=7gm0owyO8HU"
            target="_blank"
            rel="noopener"
          >
            React Native: See the Past, the Present and the Future
          </Link>
        </ListItem>
      </UnorderedList>
    </FlexBox>
  );
}

export default Slide13;
