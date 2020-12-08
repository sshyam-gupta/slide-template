import { Heading, Image, Text, Link } from "spectacle";

function Slide3() {
  return (
    <>
      <Heading>React Native Internals</Heading>
      <Image
        src="https://reactnative.dev/docs/assets/diagram_ios-android-views.svg"
        width={600}
        style={{
          margin: "0 auto",
        }}
      />
      <Text textAlign="center" fontSize="20px">
        React Native lets you build your own Native Components for{" "}
        <Link
          target="_blank"
          rel="noopener"
          fontSize="20px"
          margin="0px"
          padding="0px"
          href="https://reactnative.dev/docs/native-components-android"
        >
          Android
        </Link>{" "}
        and{" "}
        <Link
          target="_blank"
          rel="noopener"
          fontSize="20px"
          margin="0px"
          padding="0px"
          href="https://reactnative.dev/docs/native-components-ios"
        >
          iOS
        </Link>{" "}
        to suit your app’s unique needs.
      </Text>
    </>
  );
}

export default Slide3;
