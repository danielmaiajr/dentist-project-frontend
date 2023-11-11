import { useState } from "react";
import { useNavigate } from "react-router-dom";

import auth from "../auth/axios";

import { login } from "../context/AuthSlice";
import { useAppDispatch } from "../hooks";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const response = await auth.login(email, password);

    dispatch(login(response?.data?.token));
    navigate("/");
  };

  return (
    <div className="container relative h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
      <div className="lg:p-8 mx-auto flex h-full">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Entre na sua conta
            </h1>
            <p className="text-sm text-muted-foreground">
              Coloque seu email abaixo para entrar
            </p>
          </div>
          <div className="grid gap-5">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-3">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nome@exemplo.com.br"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />

                  <Label htmlFor="password">Senha</Label>
                  <Input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                </div>
                <Button>Entrar</Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  ou continue com
                </span>
              </div>
            </div>
            <Button variant="outline" type="button">
              Google
            </Button>
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our Terms of Service and Privacy
            Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
