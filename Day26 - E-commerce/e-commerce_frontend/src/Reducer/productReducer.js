import { createSlice } from '@reduxjs/toolkit'

export const productReducer = createSlice({
    name : 'items',
    initialState : {
        productList : [],
        
    },
    reducers : {
        initData : (state, action) => {
            state.productList = action.payload;
        }
        
    }
})

export default productReducer.reducer;
export const { initData } = productReducer.actions;