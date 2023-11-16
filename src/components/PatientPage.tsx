import { useState } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  createPatients,
  putPatientById,
} from "@/context/patients/patients.slice";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

import { PlusCircleIcon, Pencil } from "lucide-react";
import { Separator } from "./ui/separator";

const Patient = ({ patient }: any) => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const [name, setName] = useState(patient.name);

  const handlerSave = (e: React.SyntheticEvent) => {
    e.preventDefault();

    dispatch(putPatientById({ id: patient.id, name }));
    setOpen(false);
  };

  return (
    <div key={patient.id} className="flex items-center text-sm">
      <Dialog open={open} onOpenChange={setOpen}>
        <div>{JSON.stringify(patient)}</div>
        <DialogTrigger asChild className="ml-auto">
          <Button variant="ghost">
            <Pencil className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar paciente</DialogTitle>
            <DialogDescription>Clique salvar ao concluir</DialogDescription>
          </DialogHeader>
          <div className="flex items-center py-2">
            <Label htmlFor="name" className="pr-4">
              Nome
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" onClick={(e) => handlerSave(e)}>
                Salvar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

const PatientPage = () => {
  const dispatch = useAppDispatch();
  const patients = useAppSelector((state) => state.patients);

  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");

  const handlerSave = (e: React.SyntheticEvent) => {
    e.preventDefault();

    dispatch(createPatients({ name }));
    setOpen(false);
  };

  return (
    <div className="w-full px-12 py-8">
      <div className="w-full flex">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Pacientes</h1>
          <p className="text-sm text-muted-foreground">Lista de Pacientes</p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild className="ml-auto">
            <Button>
              <PlusCircleIcon className="mr-2 h-4 w-4" />
              Adicionar paciente
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar paciente</DialogTitle>
              <DialogDescription>Clique salvar ao concluir</DialogDescription>
            </DialogHeader>
            <div className="flex items-center py-2">
              <Label htmlFor="name" className="pr-4">
                Nome
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" onClick={(e) => handlerSave(e)}>
                  Salvar
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Separator className="my-4" />

      <div className="w-full">
        {patients.map((p) => (
          <Patient key={p.id} patient={p}></Patient>
        ))}
      </div>
    </div>
  );
};

export default PatientPage;
