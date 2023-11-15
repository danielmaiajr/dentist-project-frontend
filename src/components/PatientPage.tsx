import { useAppSelector } from "@/hooks";

const PatientPage = () => {
  const patients = useAppSelector((state) => state.patients);

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
