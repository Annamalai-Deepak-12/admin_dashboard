import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/sb-admin-2.css";
import "./fontawesome-free/css/all.min.css";
import Dashboard from "./dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./user";
import Usercreate from "./usercreate";
import ViewUser from "./view";
import Edit from "./edit";
import Login from "./login";
import PortalLayout from "./PortalLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/portal" element={<PortalLayout />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="user" element={<User />}></Route>
          <Route path="user_create" element={<Usercreate />}></Route>
          <Route path="user/:id" element={<ViewUser />}></Route>
          <Route path="edit/:id" element={<Edit />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
