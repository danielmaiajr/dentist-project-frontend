import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useAppSelector } from "@/hooks";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const PatientIdPage = () => {
  let { patientId } = useParams();
  const token = useAppSelector((state) => state.auth.token);

  const [patient, setPatient] = useState<{ name: string; phone: string } | any>(
    {}
  );

  useEffect(() => {
    const fetchPatient = async () => {
      const patientResponse = await axios.get(
        `http://localhost:3333/api/patients/${patientId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setPatient(patientResponse.data);
    };
    fetchPatient();
  }, []);

  return (
    <div className="w-full px-12 py-8">
      <div className="flex mb-6">
        <Avatar className="mr-4">
          <AvatarFallback>{patient.name?.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex">
          <div>
            <p className="text-sm font-medium">{patient.name}</p>
            <p className="text-xs text-muted-foreground">
              (22) {patient.phone}
            </p>
          </div>
        </div>
      </div>
      <Tabs defaultValue="summary" className="w-full">
        <TabsList>
          <TabsTrigger value="summary" className="px-10">
            Resumo
          </TabsTrigger>
          <TabsTrigger value="estimate" className="px-10">
            Orçamento
          </TabsTrigger>
          <TabsTrigger value="treatment" className="px-10">
            Tratamento
          </TabsTrigger>
          <TabsTrigger value="anamnese" className="px-10">
            Anamnese
          </TabsTrigger>
        </TabsList>

        <TabsContent className="grid grid-cols-2 gap-8 mt-6" value="summary">
          <Card className="col-span-1 p-6">
            <div className="text-2xl mb-6">{patient.name}</div>
            <div className="grid grid-cols-3 text-sm">
              <div className="text-muted-foreground">Celular</div>
              <div>{patient.phone}</div>
            </div>
            <div className="grid grid-cols-3 text-sm">
              <div className="text-muted-foreground">Celular</div>
              <div>{patient.phone}</div>
            </div>
            <div className="grid grid-cols-3 text-sm">
              <div className="text-muted-foreground">Celular</div>
              <div>{patient.phone}</div>
            </div>
            <div className="grid grid-cols-3 text-sm">
              <div className="text-muted-foreground">Celular</div>
              <div>{patient.phone}</div>
            </div>
          </Card>
          <Card className="col-span-1"></Card>
        </TabsContent>
        <TabsContent value="estimate">Orçamento</TabsContent>
        <TabsContent value="treatment">Tratamento</TabsContent>
        <TabsContent value="anamnese">Anamnese</TabsContent>
      </Tabs>
    </div>
  );
};

export default PatientIdPage;
