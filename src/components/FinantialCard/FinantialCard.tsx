import { CardType } from "../../type/generic";
import { Container, Title, ValueCard } from "./style";

interface FinantialCardProps {
  type: CardType;
  value: number;
}

const FinantialCard: React.FC<FinantialCardProps> = ({ type, value }) => {
  const title =
    type === CardType.CURRENT
      ? "Current balance"
      : type === CardType.INCOME
      ? "Today's income"
      : "Today's expenses";

  return (
    <Container type={type}>
      <Title>{title}</Title>
      <ValueCard>{value.toFixed(2)}</ValueCard>
    </Container>
  );
};

export default FinantialCard;
