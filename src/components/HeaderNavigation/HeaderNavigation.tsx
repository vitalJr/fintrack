import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Container, Button } from "./style";

interface HeaderNavigationProps {
  back: () => void;
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({ back }) => {
  return (
    <Container>
      <Button onPress={back}>
        <Icon name="arrow-back" size={30} color="white" />
      </Button>
    </Container>
  );
};

export default HeaderNavigation;
