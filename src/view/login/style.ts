import styled from "styled-components/native";
import { background, purpple, red, white } from "../../styles/color";

export const Container = styled.View`
  background-color: ${background};
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${background};
`;

export const RegisterTouchable = styled.TouchableOpacity``;

export const ContainerOthersSingIn = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ButtonOthersSingIn = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 5;
`;

export const Icon = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Input = styled.TextInput`
  width: 80%;
  border: 1px solid ${purpple};
  height: 50px;
  background-color: white;
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
`;

export const Button = styled.TouchableOpacity`
  width: 80%;
  height: 50px;
  background-color: ${purpple};
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 5;
`;

export const Label = styled.Text`
  font-size: 20px;
  margin: 10px 0;
  font-weight: bold;
  color: ${white};
`;

interface LabelProps {
  color?: string;
}

export const LabelError = styled.Text<LabelProps>`
  font-size: 15px;
  margin: 10px 0;
  font-style: italic;
  font-weight: bold;
  color: ${red};
`;

export const LabelRegister = styled.Text`
  font-size: 15px;
  margin: 10px 0;
  font-style: italic;
  text-decoration: underline;
  color: ${purpple};
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
`;
