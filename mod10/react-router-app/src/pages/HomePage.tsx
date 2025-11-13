import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleSignIn = (e: FormEvent) => {
    e.preventDefault();
    navigate("/users/abetavarez");
  };

  return (
    <main>
      <h1>Home Page</h1>

      <form onSubmit={handleSignIn}>
        <h3>Sign In</h3>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign in</button>
      </form>

    </main>
  );
}

export default HomePage;
