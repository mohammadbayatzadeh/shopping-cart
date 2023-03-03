const addItem = (product) => {
  return {
    type: "ADD-ITEM",
    payload: product,
  };
};

const removeItem = (product) => {
  return {
    type: "REMOVE-ITEM",
    payload: product,
  };
};

const increase = (product) => {
  return {
    type: "INCREASE",
    payload: product,
  };
};

const decrease = (product) => {
  return {
    type: "DECREASE",
    payload: product,
  };
};

const checkout = () => {
  return {
    type: "CHECKOUT",
  };
};

const clear = () => {
  return {
    type: "CLEAR",
  };
};

export { addItem, removeItem, increase, decrease, checkout, clear };
