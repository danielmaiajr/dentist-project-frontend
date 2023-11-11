import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LogOut, Pencil } from "lucide-react";

import { useAppDispatch } from "@/hooks";
import { logout } from "@/context/AuthSlice";
import React from "react";

export const NavBar = ({ title }: { title: string }) => {
  const dispatch = useAppDispatch();

  const handleLogout = (event: React.MouseEvent) => {
    event.preventDefault();

    dispatch(logout());
  };

  return (
    <div className="flex h-12 px-5 border-b">
      <div className="flex items-center space-x-4 font-medium px-4">
        {title}
      </div>
      <div className="ml-auto flex items-center space-x-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarFallback>D</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Daniel</p>
                <p className="text-xs leading-none text-muted-foreground">
                  daniel@gmail.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem>
              Editar
              <Pencil className="ml-auto h-3.5 w-3.5" />
            </DropdownMenuItem>
            <DropdownMenuItem onClick={(e) => handleLogout(e)}>
              Sair
              <LogOut className="ml-auto h-3.5 w-3.5" />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
