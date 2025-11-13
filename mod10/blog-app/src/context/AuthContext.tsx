import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

  const login = () => {
    setIsAuthenticated(true);
    navigate('/admin');
  };

  const logout = () => setIsAuthenticated(false);

  const values: AuthContextType = { isAuthenticated, login, logout }
  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  );
}
