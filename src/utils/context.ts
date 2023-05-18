import { createContext } from "react";

const UserContext = createContext({
  username: '',
  setUsername: (username: string) => {}
});

export { UserContext }