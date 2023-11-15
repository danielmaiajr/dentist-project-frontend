import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { NavBar } from "./NavBar";
import { Sidebar } from "./SideBar";

import { useAppDispatch } from "@/hooks";
import { getAllUsers } from "@/context/users/users.slice";
import { getAllInsurances } from "@/context/insurances/insurances.slice";
import { getAllPatients } from "@/context/patients/patients.slice";

const Home = () => {
  const location = useLocation();

  const [title, setTitle] = useState("");

  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchData = async () => {
      dispatch(getAllUsers());
      dispatch(getAllPatients());
      dispatch(getAllInsurances());
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (location.pathname == "/patients") setTitle("Pacientes");
    if (location.pathname == "/scheduler") setTitle("Agenda");
    if (location.pathname == "/config") setTitle("Equipe");
    if (location.pathname == "/insurance") setTitle("Planos de Saúde");
  }, [location]);

  return (
    <div>
      <NavBar title={title} />
      <div className="grid lg:grid-cols-5 xl:grid-cols-6 h-full">
        <Sidebar />
        <div className="lg:col-span-4 xl:col-span-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
