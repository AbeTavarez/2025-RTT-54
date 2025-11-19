import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function AdminPage() {
  // const { isAuthenticated } = useContext(AuthContext);
  const authCtx = useContext(AuthContext);
  
  const navigate = useNavigate();

  useEffect(() => {
    if (authCtx?.isAuthenticated === false) {
      navigate("/login");
    }
  }, [authCtx?.isAuthenticated, navigate]);

  return (
    <main>
      <h1>Welcome to the Admin Dashboard</h1>
    </main>
  );
}

export default AdminPage;
