import { createContext } from "react";

const UserContext = createContext({
  username: '',
  setUsername: (username: string) => {console.log(username)}
});

export { UserContext }