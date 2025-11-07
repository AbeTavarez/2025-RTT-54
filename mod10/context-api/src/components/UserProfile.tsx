import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserProfile() {
  const { currentUser, logIn, logOut } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>

      {currentUser?.username ? (
        <div>{currentUser.username}</div>
      ) : (
        "Please log in"
      )}

      {!currentUser?.username && (
        <button onClick={() => logIn("Kibreab")}>Login</button>
      )}

      {currentUser?.username && <button onClick={() => logOut()}>LogOut</button>}
    </div>
  );
}

export default UserProfile;
