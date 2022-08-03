import {createSlice} from "@reduxjs/toolkit";

const moneySlice = createSlice({
    name: "money",
    initialState: "100,000,000,000",
    reducers: {}
});

export default moneySlice.reducer;