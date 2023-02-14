import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

const cards = [{ id: 1 }, { id: 2 }];

export const Context = createContext(cards);

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    cards,
  });

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
