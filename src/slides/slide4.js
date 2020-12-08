import { Heading, Image, Link } from "spectacle";

function Slide4() {
  return (
    <>
      <Heading>Core Components</Heading>
      <Image
        src="../assets/core-components.png"
        width={1000}
        style={{
          margin: "0 auto",
        }}
      />
      <Link
        target="_blank"
        rel="noopener"
        fontSize="20px"
        margin="5px"
        padding="0px"
        textAlign="center"
        mt="20px"
        href="https://reactnative.dev/docs/components-and-apis"
      >
        List of core components
      </Link>
      <Link
        target="_blank"
        rel="noopener"
        fontSize="20px"
        margin="5px"
        padding="0px"
        textAlign="center"
        href="https://reactnative.directory/"
      >
        React native community components
      </Link>
      <Link
        target="_blank"
        rel="noopener"
        fontSize="20px"
        margin="5px"
        padding="0px"
        textAlign="center"
        href="https://snack.expo.io/"
      >
        Base
      </Link>
    </>
  );
}

export default Slide4;
