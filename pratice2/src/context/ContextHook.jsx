import { createContext, useContext, useState } from "react";

const Context = createContext();

const ContextHook = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

const useContextHook = () => {
  return useContext(Context);
};
export { Context, ContextHook, useContextHook };
