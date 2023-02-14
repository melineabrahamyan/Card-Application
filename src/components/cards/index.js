import { useContext } from "react";
import { Context } from "../../context";
import SingleCard from "./singleCard";

export default function Cards() {
  const {
    state: { cards },
  } = useContext(Context);

  return (
    <>
      <h2>
        {cards.map((card) => (
          <SingleCard id={card.id} />
        ))}
      </h2>
    </>
  );
}
