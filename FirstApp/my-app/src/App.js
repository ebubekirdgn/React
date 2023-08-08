import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';

const isLoggedIn = true;
const fullname = "Ebubekir";
 

function App() {
  return <div className="test"> 
     {
      isLoggedIn ?  <div> Hoş Geldin {fullname} </div>  : <Login/>
     }
    </div>;
}

export default App;
