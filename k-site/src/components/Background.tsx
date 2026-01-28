import Squares from "./Squares";

export default function Background() {
  return (
    <Squares
      speed={0.5}
      squareSize={80}
      direction="diagonal"
      borderColor="#260063"
      hoverFillColor="#6101FE"
    />
  );
}
