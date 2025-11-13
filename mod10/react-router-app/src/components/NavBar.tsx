import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        style={({isActive}) => ({ color: isActive ? "blue" : "black" })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({isActive}) => ({ color: isActive ? "blue" : "black" })}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        style={({isActive}) => ({ color: isActive ? "blue" : "black" })}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default NavBar;
