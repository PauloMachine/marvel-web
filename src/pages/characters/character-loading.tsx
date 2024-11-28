import LoadingSkeleton from "src/components/skeleton";
import Skeleton from "react-loading-skeleton";

const CharacterLoading = () => (
  <>
    <LoadingSkeleton repeat={1} height={300} width={250} />
    <Skeleton
      baseColor="#ff232a"
      highlightColor="#FF404D"
      width={300}
      height={20}
    />
  </>
);

export default CharacterLoading;
