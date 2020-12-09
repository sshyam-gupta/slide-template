import { Heading, Image, Text } from "spectacle";

function ArchitectureSlide() {
  return (
    <>
      <Heading>Current Architecture</Heading>
      <Image
        src="../assets/full-architecture.png"
        width={800}
        style={{
          margin: "0 auto",
        }}
      />
      <Text fontSize="20px" textAlign="center">
        https://www.youtube.com/watch?v=7gm0owyO8HU
      </Text>
    </>
  );
}

export default ArchitectureSlide;
