import { createContext } from "react";
import type { UserContextType } from "../types";

const UserContext = createContext<UserContextType>({
    currentUser: null,
    logIn: (user) => console.log(user),
    logOut:() => console.log('logout')
});

export default UserContext;
