import styled from "styled-components/native";
import { background, green, purpple, red, white } from "../../styles/color";
import { ActivityIndicator } from "react-native";

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${background};
`;

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  width: 80%;
  height: 40px;
  border-radius: 10px;
  background-color: ${white};
  margin: 10px 0;
  padding: 10px;
`;

interface LabelErrorProps {
  status?: string;
}

export const LabelError = styled.Text<LabelErrorProps>`
  font-size: 18px;
  color: ${(props: LabelErrorProps) => (props.status ? green : red)};
  font-weight: bold;
  margin: 10px 0;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: ${purpple};
  font-weight: bold;
  margin: 10px 0;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 40px;
  border-radius: 10px;
  background-color: ${purpple};
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 5;
`;

export const LabelButton = styled.Text`
  font-size: 18px;
  color: ${white};
  font-weight: bold;
`;

export const RegisterLogo = styled.Image`
  width: 250px;
  height: 250px;
  margin: 10px 0;
`;

export const LoadingModal = styled.Modal`
  height: 100px;
  width: 100px;
  justify-content: center;
  align-items: center;
  background: red;
  margin: 0 auto;
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.View`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs(() => ({
  size: "large",
  color: "#6200ea",
}))``;
