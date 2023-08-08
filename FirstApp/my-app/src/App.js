import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

const name = "Ebubekir";
let surname = "Doğan"
function App() {
  return <div> <Header/> {name} {surname}</div>;
 
}

export default App;
