import { get } from "http";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  FC,
} from "react";
import { getToken } from "./Services/GetToken";

interface User {
  token: string;
  // Add more user properties as needed
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const login = async (email: string, password: string): Promise<void> => {
    try {
      // Make API call to login
      const response = await fetch("http://127.0.0.1:8000/api/admin/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const userData: User = await response.json();
        setUser({ token: userData.token });
        document.cookie = "SRAM-jwt" + userData.token;
      }
      else
      {
        throw new Error("Login error")
        }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login Error");
      window.location.reload();
    }
  };

  const logout = (): void => {
    setUser(null);
    deleteAllCookies()
    alert("Signing out");
      window.location.href="/"
  };

  const value: any = {
    user,
    login,
    logout,
  };
  const Provider = AuthContext.Provider;
  return <Provider value={value}>{children}</Provider>;
};

function deleteAllCookies(): void {
    const cookies: string[] = document.cookie.split("; ");

    for (const cookie of cookies) {
        const eqPos: number = cookie.indexOf("=");
        const name: string = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
}

// Call the function to delete all cookies
deleteAllCookies();
