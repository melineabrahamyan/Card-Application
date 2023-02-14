import { useContext } from "react";
import { Context } from "../../context";

export default function SingleCard({ id }) {
  const { dispatch } = useContext(Context);
  return (
    <div className="card">
      <button
        onClick={() => dispatch({ type: "DELETE_CARD", payload: { id } })}
      >
        X
      </button>
      <h2>{id}</h2>
    </div>
  );
}
