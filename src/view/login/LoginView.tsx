import {
  Container,
  Input,
  Button,
  Label,
  Logo,
  LabelRegister,
  ContainerOthersSingIn,
  ButtonOthersSingIn,
  Icon,
  RegisterTouchable,
  SafeAreaView,
  LabelError,
} from "./style";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../type/generic";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../reducers/Authentication";
import { AppDispatch, RootState } from "../../Store";
import { useState } from "react";
import { red } from "../../styles/color";
import Loading from "../../components/Loading/Loading";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

type LoginViewProps = {
  navigation: LoginScreenNavigationProp;
};

const LoginView: React.FC<LoginViewProps> = ({ navigation }) => {
  const urlLogo = require("../../../public/img/finantial.png");
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(
    (state: RootState) => state.authentication.isLoading
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    if (email === "" || password === "") {
      setErrorMessage("Empty fields. Sorry, try again.");
      return;
    }

    dispatch(fetchLogin({ email, password }))
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        setErrorMessage("Invalid email or password");
      });
  };

  const iconGoogle = require("../../../public/icon/google.png");
  const iconApple = require("../../../public/icon/apple.png");
  const iconFacebook = require("../../../public/icon/facebook.png");

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView>
      <Container>
        <Logo source={urlLogo} />
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <Input
          placeholder="Password"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        <Button onPress={handleLogin}>
          <Label>Login</Label>
        </Button>

        {errorMessage !== "" && (
          <LabelError color={red}>{errorMessage}</LabelError>
        )}

        <RegisterTouchable onPress={handleRegister}>
          <LabelRegister>Don't have an account? Sign up</LabelRegister>
        </RegisterTouchable>

        <ContainerOthersSingIn>
          <ButtonOthersSingIn>
            <Icon source={iconGoogle} />
          </ButtonOthersSingIn>
          <ButtonOthersSingIn>
            <Icon source={iconApple} />
          </ButtonOthersSingIn>
          <ButtonOthersSingIn>
            <Icon source={iconFacebook} />
          </ButtonOthersSingIn>
        </ContainerOthersSingIn>

        <Loading isLoading={isLoading} message="We are authenticating you." />
      </Container>
    </SafeAreaView>
  );
};

export default LoginView;
