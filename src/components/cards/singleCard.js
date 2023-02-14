import { useContext } from "react";
import { Context } from "../../context";
import "../../App.css";

export default function SingleCard({ id }) {
  const { dispatch } = useContext(Context);
  return (
    <div className="card">
      <i
        className="fa-solid fa-x"
        onClick={() => dispatch({ type: "DELETE_CARD", payload: { id } })}
      ></i>
      <h2>{id}</h2>
    </div>
  );
}
