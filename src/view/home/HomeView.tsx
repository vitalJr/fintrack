import { Text } from "react-native";
import {
  SafeAreaView,
  ScrollViewBalance,
  LastMovimentations,
  TitleLastMovimentations,
  ContainerLastMovimentations,
  IconContainer,
  MovimentsFlatList,
} from "./style";
import Icon from "react-native-vector-icons/MaterialIcons";
import FinantialCard from "../../components/FinantialCard/FinantialCard";
import { finantialCardList, movimentsList } from "../../mock/finantialCard";
import Moviments from "../../components/Moviments/Moviments";
import { Moviment } from "../../type/moviment";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../Store";
import { useEffect } from "react";
import { getMoviments } from "../../reducers/Moviment";
import Loading from "../../components/Loading/Loading";

const HomeView = () => {
  const moviments = useSelector((state: RootState) => state.moviment.moviments);
  const isLoading = useSelector((state: RootState) => state.moviment.isLoading);
  const finantialCard = useSelector(
    (state: RootState) => state.moviment.finantialCard
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMoviments());
  }, [dispatch, getMoviments]);

  return (
    <SafeAreaView>
      <ScrollViewBalance horizontal showsHorizontalScrollIndicator={false}>
        {finantialCard.map((item) => {
          return (
            <FinantialCard
              key={item.type}
              type={item.type}
              value={item.value}
            />
          );
        })}
      </ScrollViewBalance>
      <ContainerLastMovimentations>
        <LastMovimentations>
          <IconContainer>
            <Icon name="event" size={20} color="#000" />
            <TitleLastMovimentations>Last updates:</TitleLastMovimentations>
          </IconContainer>

          <MovimentsFlatList
            data={moviments}
            keyExtractor={(item: Moviment, index: number) =>
              `${item.type}-${index}`
            }
            renderItem={({ item }: { item: Moviment }) => (
              <Moviments type={item.type} value={item.value} name={item.name} />
            )}
          />
        </LastMovimentations>
      </ContainerLastMovimentations>
      <Loading isLoading={isLoading} />
    </SafeAreaView>
  );
};

export default HomeView;
