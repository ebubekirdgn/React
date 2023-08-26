import ChangeTheme from "./components/ChangeTheme";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div>
      <ThemeContextProvider value={"light"}>
        <ChangeTheme />
        <Footer />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
