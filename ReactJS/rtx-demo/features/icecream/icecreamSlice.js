const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    numOfIceCreams: 10
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        buyIceCream: (state, action) => {
            state.numOfIceCreams -= action.payload;
        },
        restock: (state, action) => {
            state.numOfIceCreams += action.payload;
        }
    }
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;