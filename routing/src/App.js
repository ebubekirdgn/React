import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Dashboard/Home";
import UserDetail from "./pages/Dashboard/UserDetail";
import Users from "./pages/Dashboard/Users";
import Contacts from "./pages/Dashboard/Contacts";
// import Menu from './components/Menu';
import Login from "./pages/Auth/Login";
import DasboardLayout from "./layout/Dashboard";
import AuthLayout from "./layout/Auth";
import Register from "./pages/Auth/Register";
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      {/* <Menu /> */}
      <Routes>
        <Route path="/" element={<DasboardLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:id" element={<UserDetail />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="*" element={<Error404/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
