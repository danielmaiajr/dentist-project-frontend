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
    <div className="hidden lg:block border-r h-screen">
      <div className="px-5">
        <h2 className="m-4 text-lg font-semibold tracking-tight">Logo</h2>
        <div className="space-y-1">
          <Link
            to="/home"
            className={cn(
              buttonVariants({
                variant: getButtonVariant("/home"),
              }),
              "w-full justify-start"
            )}
          >
            <Users className="mr-4 h-4 w-4" />
            Início
          </Link>
          <Link
            to="/patients"
            className={cn(
              buttonVariants({
                variant: getButtonVariant("/patients"),
              }),
              "w-full justify-start"
            )}
          >
            <Users className="mr-4 h-4 w-4" />
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
            <Calendar className="mr-4 h-4 w-4" />
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
            <Settings2 className="mr-4 h-4 w-4" />
            Orçamentos
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
            <Settings2 className="mr-4 h-4 w-4" />
            Prótese
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
            <Settings2 className="mr-4 h-4 w-4" />
            Financeiro
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
            <Settings2 className="mr-4 h-4 w-4" />
            Configurações
          </Link>
        </div>
      </div>
    </div>
  );
};
