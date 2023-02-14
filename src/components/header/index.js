import { useContext } from "react";
import { Context } from "../../context";

export default function Header() {
  const { dispatch } = useContext(Context);
  return (
    <>
      <button onClick={() => dispatch({ type: "ADD_CARD" })}>Add card</button>
      <button>Sort card</button>
    </>
  );
}
