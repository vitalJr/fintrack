import styled from "styled-components/native";
import { purpple } from "../../styles/color";

export const FooterContainer = styled.View`
  background-color: white;
  flex-direction: row;
  height: 70px;
  shadow-color: #000;
  shadow-offset: 4px 0px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 5;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px;
  flex: 1;
  border: 1px solid #000;
  align-items: center;
  justify-content: center;
`;
