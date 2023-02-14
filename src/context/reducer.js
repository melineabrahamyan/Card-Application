export function reducer(state, action) {
  switch (action.type) {
    case "DELETE_CARD":
      const {
        payload: { id },
      } = action;
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== id),
      };

    case "ADD_CARD":
      return {
        ...state,
        cards: [...state.cards, { id: Math.random() }],
      };
  }
}
