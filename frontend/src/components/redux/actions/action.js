export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};
export const RMVCART = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};
export const REMOVEONECART = (item) => {
  return {
    type: "REMOVE_ONE",
    payload: item,
  };
};
