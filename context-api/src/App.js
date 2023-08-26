import "./styles.css";
import { LangContextProvider } from "./contexts/LangContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import Container from "./Container";

const App = () => (
  <LangContextProvider>
    <ThemeContextProvider value={"light"}>
      <Container />
    </ThemeContextProvider>
  </LangContextProvider>
);

export default App;
