const INITALSTATE = {
  carts: [],
};
export const cartreducer = (state = INITALSTATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (items) => items.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].quantity += 1;
      } else {
        const temp = { ...action.payload, quantity: 1 };
        return {
          carts: [...state.carts, temp],
        };
      }
    case "RMV_CART":
      const data = state.carts.filter((element, index) => {
        return index !== action.payload;
      });
      return {
        ...state,
        carts: data,
      };
    case "REMOVE_ONE":
      const item_decrements = state.carts.findIndex(
        (items) => items.id === action.payload.id
      );
      console.log(state.carts[item_decrements].quantity);
      if (state.carts[item_decrements].quantity >= 1) {
        const deleteItem = (state.carts[item_decrements].quantity -= 1);
        return {
          ...state,
          carts: [...state.carts],
        };
      }
    default:
      return state;
  }
};
