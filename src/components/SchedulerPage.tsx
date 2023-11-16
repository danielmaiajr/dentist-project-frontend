import { useAppSelector } from "@/hooks";

const schedulerPage = () => {
  const appointments = useAppSelector((state) => state.appointments);

  return (
    <div className="w-full px-10 py-5">
      <h1 className="text-2xl font-semibold tracking-tight pb-1">Consultas</h1>
      <p className="text-sm text-muted-foreground">Lista de consultas</p>
      {appointments.map((a) => (
        <div key={JSON.stringify(a.id)} className="text-sm">
          {JSON.stringify(a)}
        </div>
      ))}
    </div>
  );
};

export default schedulerPage;
