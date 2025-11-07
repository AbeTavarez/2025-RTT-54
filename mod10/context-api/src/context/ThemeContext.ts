import { createContext } from "react";
import type { ThemeContextType } from "../types";

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => console.log('toggle')
});

export default ThemeContext;
