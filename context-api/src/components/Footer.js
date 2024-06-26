import {useTheme} from "../contexts/ThemeContext"
import {useLang} from "../contexts/LangContext";

function Footer() {
  const { theme, toggleTheme } = useTheme();
  const { lang } = useLang();
  return (
    <div>
      <hr />
      Footer 
      <div>Aktif Tema : {theme}</div>
      <div>Aktif Dil : {lang}</div>
      <button onClick={toggleTheme}>Temayı Değiştir</button>
    </div>
  );
}

export default Footer