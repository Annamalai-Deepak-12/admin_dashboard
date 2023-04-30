import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./sidebar";
import "./css/sb-admin-2.css";
import "./fontawesome-free/css/all.min.css"
import Topbar from "./topbar";
import Dashboard from "./dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./user";
import Usercreate from "./usercreate";
import ViewUser from "./view";
import Edit from "./edit";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />}></Route>
              <Route path="/user" element={<User />}></Route>
              <Route path="/user_create" element={<Usercreate />}></Route>
              <Route path="/user/:id" element={<ViewUser />}></Route>
              <Route path="/edit/:id" element={<Edit />}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
