import { useAppSelector } from "@/hooks";

const ClinicPage = () => {
  const clinic = useAppSelector((state) => state.clinic);

  return (
    <div className="w-full px-10 py-5">
      <h1 className="text-2xl font-semibold tracking-tight pb-1">Clínica</h1>
      <p className="text-sm text-muted-foreground">Dados da clínica</p>
      <div>{JSON.stringify(clinic)}</div>
    </div>
  );
};

export default ClinicPage;
