import React from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import { Outlet } from "react-router-dom";

function PortalLayout() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default PortalLayout;
