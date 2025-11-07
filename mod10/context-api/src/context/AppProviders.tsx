import ThemeContext from "./ThemeContext";
import UserContext from "./UserContext";
import { useState, useMemo, useCallback } from "react";

interface AppProvidersProps {
  children: React.ReactNode;
}

function AppProviders({ children }: AppProvidersProps) {
  // =========== Theme Context
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }, []);

  const themeValues = useMemo(
    () => ({ theme, toggleTheme }),
    [theme, toggleTheme],
  );

  // =========== User Context
  const [currentUser, setCurrentUser] = useState({ username: "" });

  const logIn = useCallback(
    (username: string) => setCurrentUser((prev) => ({ ...prev, username })),
    [],
  );

  const logOut = useCallback(() => setCurrentUser({ username: "" }), []);

  const userValues = useMemo(
    () => ({ currentUser, logIn, logOut }),
    [currentUser, logIn, logOut],
  );

  return (
    <ThemeContext.Provider value={themeValues}>
      <UserContext.Provider value={userValues}>{children}</UserContext.Provider>
    </ThemeContext.Provider>
  );
}

export default AppProviders;
