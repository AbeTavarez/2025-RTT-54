import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { isAuthenticated, logout } = useContext(AuthContext);

  return (
    <nav>
      <div>
        <Link to="/">Home</Link> {" "}
        <Link to="/blog">Blog</Link>
      </div>

      <div>
        {isAuthenticated === false ? (
          <Link to="/login">Login</Link>
        ) : (
          <>
            <button onClick={() => logout()}>Log out</button>
            <Link to="/admin">Admin Page</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
