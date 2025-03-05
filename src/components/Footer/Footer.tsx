import { Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { FooterContainer, Button } from "./style";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../type/generic";

const Footer = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const colorItem = "#000";

  const handleHome = () => {
    navigation.navigate("Home");
  };

  const handleProfile = () => {
    navigation.navigate("Profile");
  };

  const hadleNewRegister = () => {
    navigation.navigate("Moviment");
  };

  return (
    <FooterContainer>
      <Button onPress={handleHome}>
        <Icon name="home" size={30} color={colorItem} />
        <Text style={{ color: colorItem }}>Home</Text>
      </Button>
      <Button onPress={hadleNewRegister}>
        <Icon name="add" size={30} color={colorItem} />
        <Text style={{ color: colorItem }}>Register</Text>
      </Button>
      <Button onPress={handleProfile}>
        <Icon name="person" size={30} color={colorItem} />
        <Text style={{ color: colorItem }}>Profile</Text>
      </Button>
    </FooterContainer>
  );
};

export default Footer;
