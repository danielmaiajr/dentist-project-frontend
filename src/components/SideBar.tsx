import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { User, Users, Calendar, Umbrella, Building2 } from "lucide-react";
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
              <User className="mr-2 h-4 w-4" />
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
          </div>

          <h2 className="my-2 px-4 text-lg font-semibold tracking-tight">
            Configurações
          </h2>
          <div className="space-y-1">
            <Link
              to="/config"
              className={cn(
                buttonVariants({
                  variant: getButtonVariant("/config"),
                }),
                "w-full justify-start"
              )}
            >
              <Users className="mr-2 h-4 w-4" />
              Equipe
            </Link>
            <Link
              to="/insurance"
              className={cn(
                buttonVariants({
                  variant: getButtonVariant("/insurance"),
                }),
                "w-full justify-start"
              )}
            >
              <Umbrella className="mr-2 h-4 w-4" />
              Planos de Saúde
            </Link>
            <Link
              to="/clinic"
              className={cn(
                buttonVariants({
                  variant: getButtonVariant("/clinic"),
                }),
                "w-full justify-start"
              )}
            >
              <Building2 className="mr-2 h-4 w-4" />
              Clínica
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
