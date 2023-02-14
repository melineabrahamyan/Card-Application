import { createContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";
import { initialState } from "./reducer";

export const Context = createContext();

export default function Provider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    cards: initialState,
  });

  useEffect(() => {
    localStorage.setItem("cardsState", JSON.stringify(state.cards));
  }, [state.cards]);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
