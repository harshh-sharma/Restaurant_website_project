import { createSlice ,current} from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem : (state,action) => {
            state.items.push(action.payload);
        },
        removeItem : (state,action) => {
            const arr = state.items.filter((item) => item.listOfItem.card.info.id !== action.payload);
            state.items.length = 0;
            state.items.push(...arr);
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

export const {addItem,removeItem,clearCart} = cartslice.actions;

export default cartslice.reducer;