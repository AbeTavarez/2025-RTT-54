// import context
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function LoginPage() {
  // read the context (login)
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    // call the login function from AuthContext
    login();
  };
  return (
    <main>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </main>
  );
}

export default LoginPage;
