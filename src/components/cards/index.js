import { useContext } from "react";
import { Context } from "../../context";
import SingleCard from "./singleCard";
import "../../App.css";

export default function Cards() {
  const {
    state: { cards },
  } = useContext(Context);

  return (
    <div className="card-container">
      {cards.map((card) => (
        <SingleCard id={card.id} key={card.id} />
      ))}
    </div>
  );
}
