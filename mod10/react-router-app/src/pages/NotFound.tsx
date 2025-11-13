import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main>
      <h1>404 Error - Page not Found</h1>

      <Link to='/'>Home</Link>
    </main>
  );
}

export default NotFound;
