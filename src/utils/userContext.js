import { createContext } from "react";

export const userContext = createContext({
  loggedInUser: "Default User",
});

export const idContext = createContext({
  id: 0,
});
