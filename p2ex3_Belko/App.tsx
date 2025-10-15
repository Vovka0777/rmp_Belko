import { useState } from "react";
import Navi from "./Navi";
import * as ExpoFont from "expo-font";
import AppLoading from "expo-app-loading";

const fontsLoad = () =>
  ExpoFont.loadAsync({
    "mt-bold": require("./assets/fonts/Montserrat/static/Montserrat-Black.ttf"),
    "mt-light": require("./assets/fonts/Montserrat/static/Montserrat-Light.ttf"),
    "lora-reg": require("./assets/fonts/Lora/static/Lora-Regular.ttf"),
    "lora-it": require("./assets/fonts/Lora/static/Lora-Italic.ttf"),
    "lora-bold": require("./assets/fonts/Lora/static/Lora-Bold.ttf"),
  });

export default function App() {
  const [isFontsLoaded, setFontsLoaded] = useState(false);

  const regularJSX = <Navi />;

  const appLoadingJSX = (
    <AppLoading
      startAsync={fontsLoad}
      onFinish={() => setFontsLoaded(true)}
      onError={() => {}}
    />
  );

  return isFontsLoaded ? regularJSX : appLoadingJSX;
}
