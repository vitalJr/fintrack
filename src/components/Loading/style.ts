import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { purpple } from "../../styles/color";

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  width: 250px;
  height: 200px;
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs(() => ({
  size: "large",
  color: purpple,
}))``;

export const LoadingMessage = styled.Text`
  font-size: 18px;
  color: ${purpple};
  font-weight: bold;
  margin-top: 15px;
`;
