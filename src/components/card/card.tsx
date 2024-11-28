import { CardContainer, ImageWrapper, Image, Label } from "./card.styles";
import type { TCard } from "./card.types";

const Card = ({ image, label, onClick }: TCard) => {
  return (
    <CardContainer onClick={onClick}>
      <ImageWrapper>
        <Image src={image} alt={label} />
      </ImageWrapper>
      <Label data-testid="character-name">{label}</Label>
    </CardContainer>
  );
};

export default Card;
