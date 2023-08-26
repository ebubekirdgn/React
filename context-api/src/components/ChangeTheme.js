import {useTheme} from "../contexts/ThemeContext";

function ChangeTheme() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <div>Aktif Tema : {theme}</div>
      <button onClick={toggleTheme}> Temayı Değiştir </button>
    </div>
  );
}

export default ChangeTheme;
