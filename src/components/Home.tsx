import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { NavBar } from "./NavBar";
import { Sidebar } from "./SideBar";

import { useAppDispatch } from "@/hooks";
import { getAllUsers } from "@/context/users/users.slice";
import { getAllInsurances } from "@/context/insurances/insurances.slice";
import { getAllPatients } from "@/context/patients/patients.slice";
import { getClinic } from "@/context/clinics/clinics.slice";
import { getUserById } from "@/context/user/user.slice";

const Home = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();

  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getClinic());
      dispatch(getUserById());
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
    if (location.pathname == "/clinic") setTitle("Clínica");
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
