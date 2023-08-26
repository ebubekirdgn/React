import { useContext } from "react"
import ThemeContext from "../contexts/ThemeContext"

function Footer() {
    const {theme} = useContext(ThemeContext);
  return (
    <div>
      <hr />
      <div>Footer Aktif Tema : {theme}</div>
    </div>
  );
}

export default Footer