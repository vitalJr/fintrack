import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../type/generic";
import { useSelector } from "react-redux";
import HomeView from "../view/home/HomeView";
import LoginView from "../view/login/LoginView";
import RegisterView from "../view/register/RegisterView";
import MovimentView from "../view/moviment/MovimentView";
import Footer from "../components/Footer/Footer";
import { RootState } from "../Store";

const Stack = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  const profile = useSelector(
    (state: RootState) => state.authentication.profile
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Home"
          component={HomeView}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginView}
          options={{ headerShown: false, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterView}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Moviment"
          component={MovimentView}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      {profile.token && <Footer />}
    </NavigationContainer>
  );
};

export default Navigation;
