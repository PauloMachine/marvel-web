import LoadingSkeleton from "src/components/skeleton";
import Skeleton from "react-loading-skeleton";
import Flex from "src/components/ui/flex";

const CharacterLoading = () => (
  <>
    <LoadingSkeleton repeat={1} height={300} width={250} />
    <Skeleton
      baseColor="#ff232a"
      highlightColor="#FF404D"
      width={300}
      height={20}
    />

    <Flex
      direction="row"
      align="flex-start"
      justify="space-around"
      gap="10px"
      wrap="wrap"
      style={{ width: "100%" }}
      data-testid="character-extra-info"
    >
      <Skeleton
        baseColor="#ff232a"
        highlightColor="#FF404D"
        width={400}
        height={300}
      />

      <Skeleton
        baseColor="#ff232a"
        highlightColor="#FF404D"
        width={400}
        height={300}
      />
    </Flex>
  </>
);

export default CharacterLoading;
