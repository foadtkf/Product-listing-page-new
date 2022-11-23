import ParallaxText from "./ParallaxText";

export default function FramerTest() {
  return (
    <section>
      <ParallaxText baseVelocity={-2}>Fakhrul Islam Fuad</ParallaxText>
      <ParallaxText baseVelocity={2}>
        MongoDB ExpressJS ReactJS NodeJS NextJS{" "}
      </ParallaxText>
      <ParallaxText baseVelocity={-2}>This is another test </ParallaxText>
    </section>
  );
}
