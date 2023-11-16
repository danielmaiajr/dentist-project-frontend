import { useState } from "react";
import { z } from "zod";

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

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  Row,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type PatientType = {
  id: number;
  name: string;
};

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}
export const taskSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {}
const columns: ColumnDef<PatientType>[] = [
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => <div className="w-1">#{row.getValue("id")}</div>,
  },

  {
    accessorKey: "name",
    header: "Nome",
    cell: ({ row }) => (
      <div className="flex space-x-2 font-medium">{row.getValue("name")}</div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const task = taskSchema.parse(row.original);
      return <Patient key={task.id} patient={task} />;
    },
  },
];

function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="py-1">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
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
    <div className="flex items-center text-sm">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild className="ml-auto">
          <Button variant="ghost" className="p-2 h-8">
            <Pencil className="h-4 w-4 text-zinc-600" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editar paciente</DialogTitle>
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

      <Separator className="my-5" />

      <DataTable columns={columns} data={patients} />
    </div>
  );
};

export default PatientPage;
