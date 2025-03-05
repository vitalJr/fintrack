import React, { useState } from "react";
import {
  Container,
  Input,
  SafeAreaView,
  Title,
  Button,
  TextButton,
  ContainerButton,
  RegisterButton,
  MessageRegister,
} from "./style";
import { Keyboard } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import Loading from "../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store";
import { CardType } from "../../type/generic";
import { addMoviment } from "../../reducers/Moviment";

const MovimentView = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState<CardType>("" as CardType);

  const [messageRegister, setMessageRegister] = useState<{
    status: boolean;
    message: string;
  }>({ status: false, message: "" });

  const isLoading = useSelector((state: RootState) => state.moviment.isLoading);
  const profile = useSelector(
    (state: RootState) => state.authentication.profile
  );
  const message = useSelector((state: RootState) => state.moviment.message);
  const dispatch = useDispatch<AppDispatch>();

  const handleRegisterMoviment = async () => {
    if (name === "" || value === 0 || type === ("" as CardType)) {
      setMessageRegister({
        status: false,
        message: "Please fill in all fields",
      });
      Keyboard.dismiss();
      return;
    }

    dispatch(
      addMoviment({ name, value, type, userReference: profile.userReference })
    );

    setName("");
    setValue(0);
    setType("" as CardType);

    setMessageRegister({
      status: true,
      message: "Moviment registered successfully",
    });

    Keyboard.dismiss();
  };

  const handleSelectType = (type: CardType) => {
    setType(type);
  };

  return (
    <SafeAreaView>
      <Container>
        <Title>Moviment</Title>

        {messageRegister.status && (
          <MessageRegister status={messageRegister.status}>
            {messageRegister.message}
          </MessageRegister>
        )}

        <Input placeholder="Name" value={name} onChangeText={setName} />
        <Input
          placeholder="Moviment value"
          value={value}
          onChangeText={setValue}
          keyboardType="numeric"
        />

        <ContainerButton>
          <Button
            onPress={() => handleSelectType(CardType.INCOME)}
            selected={type === CardType.INCOME}
          >
            <Icon name="arrow-upward" size={20} color="#fff" />
            <TextButton>Income</TextButton>
          </Button>
          <Button
            onPress={() => handleSelectType(CardType.EXPENSES)}
            selected={type === CardType.EXPENSES}
          >
            <Icon name="arrow-downward" size={20} color="#fff" />
            <TextButton>Expenses</TextButton>
          </Button>
        </ContainerButton>

        <RegisterButton onPress={handleRegisterMoviment}>
          <Icon name="add" size={20} color="#fff" />
          <TextButton>Register</TextButton>
        </RegisterButton>

        <Loading isLoading={isLoading} />
      </Container>
    </SafeAreaView>
  );
};

export default MovimentView;
