import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import User from './components/User';

// const isLoggedIn = true;
// const fullname = "Ebubekir";
 

function App() {
  // return <div className="test"> 
  //    {
  //     isLoggedIn ?  <div> Hoş Geldin {fullname} </div>  : <Login/>
  //    }
  //   </div>;

  return <div>
    <User/>
    <User/>
    <User/>
    <User/>
  </div>
}

export default App;
