import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import User from './components/User';

// const isLoggedIn = true;
// const fullname = "Ebubekir";
 
const user = {
  name  : "Ebubekir",
  surname : "Dogan",
  age : 30,
}

function App() {
  // return <div className="test"> 
  //    {
  //     isLoggedIn ?  <div> Hoş Geldin {fullname} </div>  : <Login/>
  //    }
  //   </div>;

  return(
   <div>
    <User data={user} friends = {["Ahmet","Selim","Ayşe","Fatma"]}/>
  </div>
  )
}

export default App;
