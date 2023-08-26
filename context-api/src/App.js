import ChangeTheme from "./components/ChangeTheme";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div>
      <ThemeContextProvider value={"light"}>
        <ChangeTheme></ChangeTheme>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
