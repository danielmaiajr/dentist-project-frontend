import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import auth from "../auth/axios";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPwd, setConfirmPwd] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPwd) {
      auth.signup(email, password);
      navigate("/login");
    }
  };

  return (
    <div className="container relative h-full flex-col items-center justify-center md:grid lg:max-w-none lg:px-0">
      <Link
        to={"/login"}
        className={cn(
          buttonVariants({ variant: "outline" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Login
      </Link>
      <div className="pb-12 mx-auto flex h-full w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Crie sua conta
          </h1>
          <p className="text-sm text-muted-foreground">
            Coloque seu email abaixo para criar conta
          </p>
        </div>

        <div className="grid gap-5">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-3">
              <div className="grid gap-3">
                <Label htmlFor="username">Email</Label>
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
                  id="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />

                <Label htmlFor="password">Confirmar senha</Label>
                <Input
                  id="password"
                  type="password"
                  onChange={(e) => setConfirmPwd(e.target.value)}
                  value={confirmPwd}
                  required
                />
              </div>
              <Button>Criar</Button>
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
          <Button variant="outline" type="button" disabled>
            Google
          </Button>
        </div>
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </div>
  );
};

export default Register;
