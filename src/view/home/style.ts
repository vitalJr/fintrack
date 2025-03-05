import styled from "styled-components/native";
import { background } from "../../styles/color";

export const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${background};
`;

export const ScrollViewBalance = styled.ScrollView`
  margin-top: 20px;
  max-height: 180px;
  padding: 10px;
`;

export const IconContainer = styled.View`
  flex-direction: row;
  gap: 10px;
`;

export const ContainerLastMovimentations = styled.View`
  padding: 10px;
`;

export const TitleLastMovimentations = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const MovimentsFlatList = styled.FlatList``;

export const LastMovimentations = styled.View`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
  shadow-color: #000;
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 5;
`;
