import { useEffect, useState } from "react";

import { z } from "zod";
import { useAppDispatch, useAppSelector } from "@/hooks";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { putClinic } from "@/context/clinics/clinics.slice";

const ClinicSchema = z.object({
  name: z
    .string()
    .optional()
    .transform((val) => {
      if (val == null) return "";
      return val;
    }),
  cpnj: z
    .string()
    .optional()
    .transform((val) => {
      if (val == null) return "";
      return val;
    }),
  responsible: z
    .string()
    .optional()
    .nullable()
    .transform((val) => {
      if (val == null) return "";
      return val;
    }),
  email: z
    .string()
    .optional()
    .nullable()
    .transform((val) => {
      if (val == null) return "";
      return val;
    }),
  phone: z
    .string()
    .optional()
    .nullable()
    .transform((val) => {
      if (val == null) return "";
      return val;
    }),
  celphone: z
    .string()
    .optional()
    .nullable()
    .transform((val) => {
      if (val == null) return "";
      return val;
    }),
  cep: z
    .string()
    .optional()
    .nullable()
    .transform((val) => {
      if (val == null) return "";
      return val;
    }),
  street: z
    .string()
    .optional()
    .nullable()
    .transform((val) => {
      if (val == null) return "";
      return val;
    }),
  number: z
    .string()
    .optional()
    .nullable()
    .transform((val) => {
      if (val == null) return "";
      return val;
    }),
  complement: z
    .string()
    .optional()
    .nullable()
    .transform((val) => {
      if (val == null) return "";
      return val;
    }),
  neighborhood: z
    .string()
    .optional()
    .nullable()
    .transform((val) => {
      if (val == null) return "";
      return val;
    }),
  city: z
    .string()
    .optional()
    .nullable()
    .transform((val) => {
      if (val == null) return "";
      return val;
    }),
  state: z
    .string()
    .optional()
    .nullable()
    .transform((val) => {
      if (val == null) return "";
      return val;
    }),
});

type ClinicState = z.infer<typeof ClinicSchema>;

const Clinic = () => {
  const clinicState = useAppSelector((state) => state.clinic);
  const dispatch = useAppDispatch();

  const [clinic, setClinic] = useState<ClinicState>({
    name: "",
    cpnj: "",
    responsible: "",
    email: "",
    phone: "",
    celphone: "",
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: "",
  });

  useEffect(() => {
    const parsed = ClinicSchema.safeParse(clinicState);
    if (parsed.success) setClinic({ ...clinic, ...parsed.data });
  }, [clinicState]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClinic({ ...clinic, [e.target.name]: e.target.value });
  };

  const handlerSave = (e: React.SyntheticEvent) => {
    e.preventDefault();

    dispatch(putClinic(clinic));
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight mt-6">
        Dados da clínica
      </h2>
      <Separator className="my-5" />
      <div className="grid grid-cols-3 gap-5 w-full mb-2">
        <div className="col-span-2 space-y-1">
          <Label htmlFor="text">Nome da Clínica</Label>
          <Input
            id="text"
            name="name"
            value={clinic.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col-span-1 space-y-1">
          <Label htmlFor="text">CNPJ</Label>
          <Input
            id="text"
            name="cpnj"
            value={clinic.cpnj}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="space-y-1">
        <Label htmlFor="text">Responsável pela clínica</Label>
        <Input
          id="text"
          name="responsible"
          value={clinic.responsible}
          onChange={(e) => handleChange(e)}
        />
      </div>

      <h2 className="text-2xl font-semibold tracking-tight my-3">
        Informações da clínica
      </h2>
      <Separator className="my-5" />
      <div className="grid grid-cols-3 gap-5 w-full mb-2">
        <div className="col-span-1 space-y-1">
          <Label htmlFor="text">Email</Label>
          <Input disabled id="text" name="email" value={clinic.email} />
        </div>
        <div className="col-span-1 space-y-1">
          <Label htmlFor="text">Telefone</Label>
          <Input
            id="text"
            name="phone"
            value={clinic.phone}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col-span-1 space-y-1">
          <Label htmlFor="text">Celular</Label>
          <Input
            id="text"
            name="celphone"
            value={clinic.celphone}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold tracking-tight my-3">
        Localização
      </h2>
      <Separator className="my-5" />
      <div className="grid grid-cols-6 gap-5 w-full mb-2">
        <div className="col-span-1 space-y-1">
          <Label htmlFor="text">CEP</Label>
          <Input
            id="text"
            name="cep"
            value={clinic.cep}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col-span-2 space-y-1">
          <Label htmlFor="text">Rua</Label>
          <Input
            id="text"
            name="street"
            value={clinic.street}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col-span-1 space-y-1">
          <Label htmlFor="text">Número</Label>
          <Input
            id="text"
            name="number"
            value={clinic.number}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col-span-2 space-y-1">
          <Label htmlFor="text">Complemento</Label>
          <Input
            id="text"
            name="complement"
            value={clinic.complement}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5 w-full mb-2">
        <div className="col-span-1 space-y-1">
          <Label htmlFor="text">Bairro</Label>
          <Input
            id="text"
            name="neighborhood"
            value={clinic.neighborhood}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col-span-1 space-y-1">
          <Label htmlFor="text">Cidade</Label>
          <Input
            id="text"
            name="city"
            value={clinic.city}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col-span-1 space-y-1">
          <Label htmlFor="text">Estado</Label>
          <Input
            id="text"
            name="state"
            value={clinic.state}
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className="flex w-full mt-5">
        <Button className="ml-auto px-8" onClick={(e) => handlerSave(e)}>
          Salvar
        </Button>
      </div>
    </div>
  );
};

export default Clinic;
