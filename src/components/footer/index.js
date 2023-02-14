import { useContext } from "react";
import { Context } from "../../context";

export default function Footer() {
  const {
    state: { cards },
  } = useContext(Context);

  return (
    <>
      <p>Total number of cards: {cards.length}</p>
    </>
  );
}
