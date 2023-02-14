import { useContext } from "react";
import { Context } from "../../context";
import "../../App.css";

export default function Footer() {
  const {
    state: { cards },
  } = useContext(Context);

  return (
    <div className="footer">
      <p>Total number of cards: {cards.length}</p>
    </div>
  );
}
