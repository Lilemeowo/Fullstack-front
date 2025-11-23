import { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const registrar = (data) => {
    setUsuario(data);
  };

  const actualizarPerfil = (data) => {
    setUsuario({ ...usuario, ...data });
  };

  return (
    <UserContext.Provider
      value={{
        usuario,
        registrar,
        actualizarPerfil,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
