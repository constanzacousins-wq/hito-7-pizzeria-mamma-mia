
import { createContext, useState } from "react";

// Creamos el contexto de usuario
export const UserContext = createContext();

// Creamos el proveedor
const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true);

  // Función para cerrar sesión
  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
