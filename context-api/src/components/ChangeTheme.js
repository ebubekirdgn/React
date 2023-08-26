import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

function ChangeTheme() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <div>Aktif Tema : {theme}</div>
      <button onClick={() => setTheme("dark")}> ChangeTheme</button>
    </div>
  );
}

export default ChangeTheme;
