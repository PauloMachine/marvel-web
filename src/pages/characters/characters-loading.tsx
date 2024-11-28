import LoadingSkeleton from "src/components/skeleton";
import type { TCharactersLoading } from "./characters.types";

const CharactersLoading = ({ limit }: TCharactersLoading) => (
  <LoadingSkeleton repeat={limit} height={300} width={250} />
);

export default CharactersLoading;
