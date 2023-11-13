import { getAllPatients } from "@/context/PatientSlice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect } from "react";

const PatientPage = () => {
  const dispatch = useAppDispatch();
  const patients = useAppSelector((state) => state.patient.patients);

  useEffect(() => {
    dispatch(getAllPatients());
  }, []);

  return (
    <div className="w-full px-10 py-5">
      <h1 className="text-2xl font-semibold tracking-tight pb-1">Pacientes</h1>
      <p className="text-sm text-muted-foreground">Lista de Pacientes</p>
      {patients.map((p) => (
        <div key={JSON.stringify(p.id)} className="text-sm">
          {JSON.stringify(p)}
        </div>
      ))}
    </div>
  );
};

export default PatientPage;
