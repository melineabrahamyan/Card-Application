import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const Context = createContext([]);

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    cards: [],
  });

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
