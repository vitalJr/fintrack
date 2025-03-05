import { CardType } from "../../type/generic";
import {
  Container,
  ContainerTitleMoviment,
  TitleMoviment,
  ValueMoviment,
  NameMoviment,
} from "./style";
import Icon from "react-native-vector-icons/MaterialIcons";

interface MovimentsProps {
  type: CardType;
  value: number;
  name: string;
}

const Moviments: React.FC<MovimentsProps> = ({ type, value, name }) => {
  const arrowType = (): string => {
    return type === CardType.INCOME ? "arrow-upward" : "arrow-downward";
  };

  const title = type === CardType.INCOME ? "Income" : "Expense";

  return (
    <Container>
      <ContainerTitleMoviment type={type}>
        <Icon name={arrowType()} size={15} color="white" />
        <TitleMoviment>{title}</TitleMoviment>
      </ContainerTitleMoviment>
      <ValueMoviment>{Number(value).toFixed(2)}</ValueMoviment>
      <NameMoviment>{name}</NameMoviment>
    </Container>
  );
};

export default Moviments;
