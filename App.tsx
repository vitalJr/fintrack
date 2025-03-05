import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/router/Navigation";
import { background } from "./src/styles/color";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import store from "./src/Store";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar backgroundColor={background} />
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  );
}
