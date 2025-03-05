import styled from "styled-components/native";
import {
  background,
  green,
  purpple,
  purppleLight,
  red,
} from "../../styles/color";

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${background};
`;

export const Container = styled.View`
  justify-content: center;
  padding: 10px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Input = styled.TextInput`
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  border: 1px solid ${purpple};
`;

interface MessageRegisterProps {
  status?: boolean;
}

export const MessageRegister = styled.Text<MessageRegisterProps>`
  color: ${(props: MessageRegisterProps) => (props.status ? green : red)};
  font-weight: bold;
  margin-top: 10px;
`;

export const ContainerButton = styled.View`
  align-items: center;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
`;

interface ButtonProps {
  selected?: boolean;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props: ButtonProps) =>
    !props.selected ? purpple : purppleLight};
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  flex: 1;
  padding: 10px;
  margin-top: 10px;
  align-items: center;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 5;
`;

export const TextButton = styled.Text`
  color: white;
  font-weight: bold;
`;

export const RegisterButton = styled.TouchableOpacity`
  background-color: ${green};
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 5;
`;
