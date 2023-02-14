import { useContext } from "react";
import { Context } from "../../context";
import "../../App.css";

export default function Header() {
  const { dispatch } = useContext(Context);
  return (
    <div className="header">
      <button
        className="btn add"
        onClick={() => dispatch({ type: "ADD_CARD" })}
      >
        add card
      </button>
      <button
        className="btn sort"
        onClick={() => dispatch({ type: "SORT_CARDS" })}
      >
        sort cards
      </button>
    </div>
  );
}
