import styled from "styled-components/native";
import { purpple } from "../../styles/color";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background-color: ${purpple};
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
`;
