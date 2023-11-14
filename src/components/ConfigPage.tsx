import { useAppSelector } from "@/hooks";

const ConfigPage = () => {
  const users = useAppSelector((state) => state.users);

  return (
    <div className="w-full px-10 py-5">
      <h1 className="text-2xl font-semibold tracking-tight pb-1">Equipe</h1>
      <p className="text-sm text-muted-foreground">Lista de profissionais</p>
      {users.map((u) => (
        <div key={JSON.stringify(u.id)} className="text-sm">
          {JSON.stringify(u)}
        </div>
      ))}
    </div>
  );
};

export default ConfigPage;
