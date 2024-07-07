import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    // we have crated a cart and initally it is empty and it will be filled and delt with the help of reducer function
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    // reducer function and hae two parameter state and action
    addItems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItems:(state, action) => {
        state.items.pop();    
    },
    clearCart: (state) => {
        state.items.length = 0;
        // state =[] this will not work
    },  
  }, 
});

// exporting action and reducer function
export const {addItems , removeItems , clearCart } = cartSlice.actions;
export default cartSlice.reducer;