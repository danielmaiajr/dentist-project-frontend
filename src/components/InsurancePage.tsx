import { useAppSelector } from "@/hooks";

const InsurancePage = () => {
  const insurances = useAppSelector((state) => state.insurances);

  return (
    <div className="w-full px-10 py-5">
      <h1 className="text-2xl font-semibold tracking-tight pb-1">Planos</h1>
      <p className="text-sm text-muted-foreground">Lista de Planos</p>
      {insurances.map((i) => (
        <div key={JSON.stringify(i.id)} className="text-sm">
          {JSON.stringify(i)}
        </div>
      ))}
    </div>
  );
};

export default InsurancePage;
