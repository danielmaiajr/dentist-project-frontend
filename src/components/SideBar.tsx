import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Users, Calendar, Settings2 } from "lucide-react";
import { Link } from "react-router-dom";

import { useLocation } from "react-router-dom";

export const Sidebar = () => {
  const location = useLocation();

  const getButtonVariant = (path: string) => {
    return location.pathname == path ? "secondary" : "ghost";
  };

  return (
    <div className="pt-12 hidden lg:block border-r h-screen">
      <div className="space-y-4 py-4">
        <div className="px-5 py-2">
          <h2 className="my-2 px-4 text-lg font-semibold tracking-tight">
            Clínica
          </h2>
          <div className="space-y-1">
            <Link
              to="/patients"
              className={cn(
                buttonVariants({
                  variant: getButtonVariant("/patients"),
                }),
                "w-full justify-start"
              )}
            >
              <Users className="mr-2 h-4 w-4" />
              Pacientes
            </Link>
            <Link
              to="/scheduler"
              className={cn(
                buttonVariants({
                  variant: getButtonVariant("/scheduler"),
                }),
                "w-full justify-start"
              )}
            >
              <Calendar className="mr-2 h-4 w-4" />
              Agenda
            </Link>

            <Link
              to="/config"
              className={cn(
                buttonVariants({
                  variant: getButtonVariant("/config"),
                }),
                "w-full justify-start"
              )}
            >
              <Settings2 className="mr-2 h-4 w-4" />
              Configurações
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
