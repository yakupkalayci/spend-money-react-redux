import { createSlice } from "@reduxjs/toolkit";

import AllProducts from "./products.json";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: AllProducts,
    initMoney: 100000000000,
    end: 100000000000,
    price: 0
  },
  reducers: {
    setAmount: (state, action) => {
      state.products = state.products.map((product) => {
        return product.id === action.payload.id
          ? { ...product, amount: Number(action.payload.amount) }
          : product;
      });
    },
    increase: (state, action) => {
        const price = state.products.find(product => product.id === action.payload.id).price;

        state.products = state.products.map((product) => {
          return product.id === action.payload.id
            ? { ...product, amount: product.amount+=1 }
            : product;
        });

        state.end -= price;
        state.price = price;
    },
    decrease: (state, action) => {
        const price = state.products.find(product => product.id === action.payload.id).price;

        state.products = state.products.map((product) => {
          return product.id === action.payload.id
            ? { ...product, amount: product.amount-=1 }
            : product;
        });
        state.end += price;
        state.price = price;
    },
    calcMoney: (state) => {
      state.products.forEach(
        (product) => (state.end -= product.price * product.amount)
      );
    },
  },
});

export const { setAmount, calcMoney, increase, decrease } = productsSlice.actions;
export default productsSlice.reducer;
