import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import Users from './pages/Users';
import Contacts from './pages/Contacts';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home/>} />  
      <Route path="users" element={<Users/>} />  
      <Route path="contacts" element={<Contacts/>} />  
    </Routes>
  </BrowserRouter>
  );
}
export default App;
