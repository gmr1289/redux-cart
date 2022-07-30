import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    Items: [],
    totalQuantity: 0,
    change: false,
  },
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.Items = action.payload.Items;
    },

    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.Items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.change = true;
      if (!existingItem) {
        state.Items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.Items.find((item) => item.id === id);
      state.totalQuantity--;
      state.change = true;
      if (existingItem.quantity === 1) {
        state.Items = state.Items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const Cartactions = CartSlice.actions;

export default CartSlice.reducer;
