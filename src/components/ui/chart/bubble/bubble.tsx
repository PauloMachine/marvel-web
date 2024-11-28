import type { TBubbleChart } from "./bubble.types";
import { Bubble, BubbleContainer } from "./bubble.styles";

const BubbleChart = ({ data }: TBubbleChart) => {
  return (
    <BubbleContainer>
      {data.map((bubble, index) => {
        const adjustedLeft = Math.min(
          Math.max(bubble.x, bubble.size / 2),
          100 - bubble.size / 2,
        );
        const adjustedTop = Math.min(
          Math.max(bubble.y, bubble.size / 2),
          100 - bubble.size / 2,
        );

        return (
          <Bubble
            key={index}
            style={{
              left: `${adjustedLeft}%`,
              top: `${adjustedTop}%`,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              backgroundImage: `url(${bubble.image})`,
            }}
            title={bubble.label}
          />
        );
      })}
    </BubbleContainer>
  );
};

export default BubbleChart;
