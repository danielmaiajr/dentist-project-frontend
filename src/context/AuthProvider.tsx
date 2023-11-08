import { createContext, useMemo, useState } from "react";

type ContextType = {
  auth: boolean;
  token: string;
  contextHandler: (authVal: boolean, tokenVal: string) => void;
};

const AuthContext = createContext<ContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.JSX.Element }) => {
  const [token, setToken] = useState<string>("");
  const [auth, setAuth] = useState<boolean>(false);
  const contextHandler = (authVal: boolean, tokenVal: string) => {
    setAuth(authVal);
    setToken(tokenVal);
  };

  return (
    <AuthContext.Provider value={{ auth, token, contextHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
