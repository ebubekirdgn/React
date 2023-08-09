import './App.css';
import User from './components/User';
import Counter from './components/Counter';
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
      {/* <User 
      name = "asdasd"
      city="SAAmsun"
      age= {30}
      /> */}

      <Counter/>
  </div>
  )
}

export default App;
