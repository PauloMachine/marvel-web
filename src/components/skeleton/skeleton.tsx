import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import type { TSkeleton } from "./skeleton.types";

const LoadingSkeleton = ({
  repeat,
  height = 20,
  width = 200,
  baseColor = "#ff232a",
  highlightColor = "#FF404D",
}: TSkeleton) => {
  return (
    <>
      {Array.from({ length: repeat }).map((_, index) => (
        <Skeleton
          key={index}
          height={height}
          width={width}
          baseColor={baseColor}
          highlightColor={highlightColor}
        />
      ))}
    </>
  );
};

export default LoadingSkeleton;
