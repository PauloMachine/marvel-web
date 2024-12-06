import type { TBubbleChart } from "./bubble.types";
import { Bubble, BubbleContainer } from "./bubble.styles";

const BubbleChart = ({ data }: TBubbleChart) => {
  return (
    <BubbleContainer>
      {data.map((bubble, index) => (
        <Bubble
          key={index}
          style={{
            position: "absolute",
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            backgroundImage: `url(${bubble.image})`,
          }}
          title={bubble.label}
        />
      ))}
    </BubbleContainer>
  );
};

export default BubbleChart;
