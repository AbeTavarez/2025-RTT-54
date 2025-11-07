import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonStyle = {
    background: theme === "dark" ? "#333" : "#FFF",
    color: theme === "dark" ? "#FFF" : "#333",
    padding: "10px",
    border: `1px solid ${theme === "dark" ? "#FFF" : "#333"}`,
  };

  return (
    <nav>
      <h3 style={buttonStyle}>Current Theme: {theme}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}

export default NavBar;
