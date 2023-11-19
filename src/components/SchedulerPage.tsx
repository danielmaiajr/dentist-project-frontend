import { useAppSelector } from "@/hooks";

const schedulerPage = () => {
  const appointments = useAppSelector((state) => state.appointments);

  const cols = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const rows = (22 - 7) * 4;
  console.log(6 % 4);

  return (
    <div className="w-full px-10 py-5">
      <h1 className="text-2xl font-semibold tracking-tight pb-1">Consultas</h1>
      <p className="text-sm text-muted-foreground">Lista de consultas</p>
      {appointments.map((a) => (
        <div key={JSON.stringify(a.id)} className="text-sm">
          {JSON.stringify(a)}
        </div>
      ))}

      <div className="w-full mt-10">
        <div className="flex w-full">
          <div className="w-full grid grid-cols-6">
            {cols.map((_, i) => (
              <div className="col-span-1">
                <div className="border-l border-slate-300">{_}</div>
                <div className={`w-full border-l border-slate-300`}>
                  {Array(rows)
                    .fill(null)
                    .map((_, j) => (
                      <div
                        className={
                          j % 4
                            ? "border-t border-slate-100 py-1"
                            : "border-t border-slate-300 py-1"
                        }
                      >
                        &nbsp;
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default schedulerPage;
