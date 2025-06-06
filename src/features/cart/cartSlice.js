import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(), //important
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      console.log(newItem);
      const cartItem = state.cartItems.find(
        (item) => item.itemandColorID === newItem.itemandColorID
      );
      if (cartItem) {
        cartItem.noofItems += newItem.noofItems;
      } else {
        state.cartItems.push(newItem);
      }
      state.numItemsInCart += newItem.noofItems;
      state.cartTotal += newItem.noofItems * newItem.price;

      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Added to cart");
    },
    clearCart: () => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, { payload }) => {
      console.log("INSIDE REMOVE ITEM");
      const { itemandColorID } = payload;
      console.log(itemandColorID);

      const cartItem = state.cartItems.find(
        (item) => item.itemandColorID === itemandColorID
      );
      state.cartItems = state.cartItems.filter((item) => item !== cartItem);

      state.numItemsInCart -= cartItem.noofItems;
      state.cartTotal -= cartItem.price * cartItem.noofItems;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error("Item Removed from cart");
    },
    editItem: (state, action) => {
      const { itemandColorID, noofItems } = action.payload;
      const cartItem = state.cartItems.find(
        (item) => item.itemandColorID === itemandColorID
      );
      state.numItemsInCart += noofItems - cartItem.noofItems;
      state.cartTotal += cartItem.price * (noofItems - cartItem.noofItems);
      cartItem.noofItems = noofItems;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Cart Updated");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.tax + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
