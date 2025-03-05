import { StackNavigationProp } from "@react-navigation/stack";
import HeaderNavigation from "../../components/HeaderNavigation/HeaderNavigation";
import { RootStackParamList } from "../../type/generic";
import {
  SafeAreaView,
  Container,
  Input,
  Title,
  Button,
  LabelButton,
  RegisterLogo,
  LabelError,
  LoadingModal,
  Overlay,
  ModalContent,
  LoadingIndicator,
} from "./style";
import { AppDispatch, RootState } from "../../Store";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { registerUser } from "../../reducers/RegisterUser";
import { Modal, View } from "react-native";
import Loading from "../../components/Loading/Loading";

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Register"
>;

type RegisterViewProps = {
  navigation: LoginScreenNavigationProp;
};

const RegisterView: React.FC<RegisterViewProps> = ({ navigation }) => {
  const logo = require("../../../public/img/registerLogo.png");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [messageRegister, setMessageRegister] = useState<{
    status: boolean;
    message: string;
  }>({ status: false, message: "" });

  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(
    (state: RootState) => state.registerUser.isLoading
  );

  const hadleRegisterUser = () => {
    if (
      email === "" ||
      password === "" ||
      name === "" ||
      passwordConfirmation === ""
    ) {
      setMessageRegister({
        status: false,
        message: "Empty fields. Sorry, try again.",
      });
      return;
    }

    if (password !== passwordConfirmation) {
      setMessageRegister({
        status: false,
        message: "Password and confirm password are different.",
      });
      return;
    }

    dispatch(
      registerUser({
        name,
        email,
        password,
      })
    ).then(() => {
      setEmail("");
      setName("");
      setPassword("");
      setPasswordConfirmation("");
      setMessageRegister({
        status: true,
        message: "User registered successfully",
      });
    });
  };

  return (
    <SafeAreaView>
      <View>
        <HeaderNavigation back={navigation.goBack} />
        <Container>
          <Title>Register</Title>

          <RegisterLogo source={logo} resizeMode="contain" />

          {messageRegister.message && (
            <LabelError status={messageRegister.status}>
              {messageRegister.message}
            </LabelError>
          )}

          <Input placeholder="Name" value={name} onChangeText={setName} />
          <Input placeholder="Email" value={email} onChangeText={setEmail} />

          <Input
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Input
            placeholder="Confirm Password"
            secureTextEntry
            value={passwordConfirmation}
            onChangeText={setPasswordConfirmation}
          />

          <Button onPress={hadleRegisterUser}>
            <LabelButton>Register</LabelButton>
          </Button>
        </Container>
      </View>

      <Loading isLoading={isLoading} />
    </SafeAreaView>
  );
};

export default RegisterView;
