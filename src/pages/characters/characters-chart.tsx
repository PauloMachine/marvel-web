import { useTranslation } from "react-i18next";
import Flex from "src/components/ui/flex";
import { Typography } from "./characters.styles";
import BarChart from "src/components/ui/chart/bar";
import BubbleChart from "src/components/ui/chart/bubble";
import { formatBarData, formatBubbleData } from "./characters.utils";
import type { TCharacters } from "./characters.types";

const CharactersChart = ({ characters }: TCharacters) => {
  const { t: translate } = useTranslation();

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="15px"
      style={{
        width: "100%",
        padding: "20px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
      }}
    >
      <Typography>
        {translate("additionalInfo", "Informações adicionais")}
      </Typography>
      <BarChart data={formatBarData(characters)} />
      <BubbleChart data={formatBubbleData(characters)} />
    </Flex>
  );
};

export default CharactersChart;
