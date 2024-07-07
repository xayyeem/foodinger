import { createContext } from "react";

const UserContext = createContext({
    loggedInUser:"Guest Login",    
});

export default UserContext;