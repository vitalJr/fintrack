import styled from "styled-components/native";
import { backgroundLight } from "../../styles/color";
import { getBackgroundCard } from "../../helpers/utils";

export const Container = styled.View`
  margin-top: 20px;
  padding: 10px;
  gap: 10px;
  background-color: ${backgroundLight};
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 5;
`;

interface ContainerProps {
  type: string;
}

export const ContainerTitleMoviment = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${(props: ContainerProps) => getBackgroundCard(props.type)};
  width: 90px;
  height: 25px;
  border-radius: 5px;
  padding: 5px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 5;
`;

export const TitleMoviment = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: white;
`;

export const ValueMoviment = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: black;
`;

export const NameMoviment = styled.Text`
  font-size: 15px;
  color: black;
`;
