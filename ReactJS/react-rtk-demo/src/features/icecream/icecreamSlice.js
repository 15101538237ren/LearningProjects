import { createSlice } from "@reduxjs/toolkit";
import { buyCake } from "../cake/cakeSlice";

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    buyIceCream: (state, action) => {
      state.numOfIceCreams -= action.payload;
    },
    restock: (state, action) => {
      state.numOfIceCreams += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(buyCake, (state, action) => {
      state.numOfIceCreams -= action.payload;
    });
  },
});

export default iceCreamSlice.reducer;
export const { buyIceCream, restock } = iceCreamSlice.actions;
