import { useAppDispatch, useAppSelector } from "@/hooks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { PlusCircleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { createUser } from "@/context/users/users.slice";
import Clinic from "./components/clinic";

const ConfigPage = () => {
  const users = useAppSelector((state) => state.users);
  const insurances = useAppSelector((state) => state.insurances);
  const clinic = useAppSelector((state) => state.clinic);

  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlerSave = (e: React.SyntheticEvent) => {
    e.preventDefault();

    dispatch(createUser({ email, password: "123456" }));
    setOpen(false);
  };

  return (
    <div className="w-full px-10 my-8">
      <Tabs defaultValue="clinic" className="w-full">
        <TabsList>
          <TabsTrigger value="clinic" className="px-10">
            Clínica
          </TabsTrigger>
          <TabsTrigger value="team" className="px-10">
            Equipe
          </TabsTrigger>
          <TabsTrigger value="insurance" className="px-10">
            Planos
          </TabsTrigger>
          <TabsTrigger value="anamnese" className="px-10">
            Anamnese
          </TabsTrigger>
        </TabsList>

        <TabsContent value="clinic">
          <Clinic />
        </TabsContent>

        <TabsContent value="team" className="w-full">
          <div className="flex items-center">
            <div>
              <h1 className="text-2xl font-semibold mt-6">Membros da Equipe</h1>
              <p className="text-sm text-muted-foreground">
                Convide profissionais para colaborar
              </p>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild className="ml-auto">
                <Button>
                  <PlusCircleIcon className="mr-2 h-4 w-4" />
                  Adicionar Profissional
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    Adicionar Profissional
                  </DialogTitle>
                  <DialogDescription>
                    Clique salvar ao concluir
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col py-2 space-y-4">
                  <div className="flex items-center">
                    <Label htmlFor="text" className="pr-4">
                      Nome
                    </Label>
                    <Input
                      id="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="ml-auto w-10/12"
                    />
                  </div>
                  <div className="flex items-center">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="ml-auto w-10/12"
                    />
                  </div>
                  <div className="flex items-center">
                    <Label htmlFor="password" className="pr-4">
                      Senha
                    </Label>
                    <Input
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="ml-auto w-10/12"
                    />
                  </div>
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

          <Separator className="my-6" />
          <div className="w-full grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 md:gap-3 ">
            {users.map((u) => (
              <Card key={String(u.id)} className="flex items-center p-6">
                <Avatar className="mr-4">
                  <AvatarFallback>D</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Daniel</p>
                  <p className="text-sm font-normal text-muted-foreground capitalize">
                    {u.role}
                  </p>
                  <p className="text-sm text-muted-foreground">{u.email}</p>
                </div>
                <div className="flex items-center ml-auto">
                  <Button variant="ghost" className="text-sm font-normal">
                    Editar
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="insurance">
          <div className="flex items-center">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight mt-6">
                Planos Odontológicos
              </h1>
              <p className="text-sm text-muted-foreground">Lista de Planos</p>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild className="ml-auto">
                <Button>
                  <PlusCircleIcon className="mr-2 h-4 w-4" />
                  Adicionar Plano
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    Adicionar Plano
                  </DialogTitle>
                  <DialogDescription>
                    Clique salvar ao concluir
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col py-2 space-y-4">
                  <div className="flex items-center">
                    <Label htmlFor="text" className="pr-4">
                      Nome
                    </Label>
                    <Input
                      id="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="ml-auto w-10/12"
                    />
                  </div>
                  <div className="flex items-center">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="ml-auto w-10/12"
                    />
                  </div>
                  <div className="flex items-center">
                    <Label htmlFor="password" className="pr-4">
                      Senha
                    </Label>
                    <Input
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="ml-auto w-10/12"
                    />
                  </div>
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
          <Separator className="my-6" />
          <div className="w-full grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 md:gap-3 ">
            {insurances.map((i) => (
              <Card key={String(i.id)} className="flex items-center p-6">
                <Avatar className="mr-4">
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{i.name}</p>
                </div>
                <div className="flex items-center ml-auto">
                  <Button variant="ghost" className="text-sm font-normal">
                    Editar
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="anamnese">
          <h1 className="text-2xl font-semibold tracking-tight mt-6">
            Anamnese
          </h1>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ConfigPage;
