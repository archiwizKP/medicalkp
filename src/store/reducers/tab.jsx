import { createSlice } from "@reduxjs/toolkit";

// initial state
const initialState = {
    index: 0,
}

const HeaderTab = createSlice({
    name: 'Tab',
    initialState, 
    reducers: {
        TabClicked(state, action) {
            state.index = action.payload;
            console.log("action",action.payload);
        },
    }
});

export default HeaderTab.reducer;

export const { TabClicked } = HeaderTab.actions;
