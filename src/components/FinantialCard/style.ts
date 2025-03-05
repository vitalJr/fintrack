import styled from "styled-components/native";
import { purpple, green, red } from "../../styles/color";
import { CardType } from "../../type/generic";
import { getBackgroundCard } from "../../helpers/utils";

interface ContainerProps {
  type: string;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${(props: ContainerProps) => getBackgroundCard(props.type)};
  flex-direction: column;
  padding: 10px;
  border-radius: 10px;
  height: 136px;
  width: 305px;
  margin: 10px;
  gap: 18px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 5;
`;

export const Title = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;

export const ValueCard = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;
