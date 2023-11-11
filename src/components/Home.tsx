import { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
import { Sidebar } from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (location.pathname == "/patients") setTitle("Pacientes");
    if (location.pathname == "/scheduler") setTitle("Agenda");
  }, [location]);

  return (
    <div>
      <NavBar title={title} />
      <div className="grid lg:grid-cols-5 xl:grid-cols-6 h-full">
        <Sidebar />
        <div className="col-span-3 lg:col-span-4 ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
