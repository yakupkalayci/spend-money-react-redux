import {configureStore} from "@reduxjs/toolkit";

import productsSliceReducer from "./products/productsSlice";
import moneySliceReducer from "./money/moneySlice";

export const store = configureStore({
    reducer: {
        products: productsSliceReducer,
        money: moneySliceReducer
    }
});