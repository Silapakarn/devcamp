import { createSlice } from '@reduxjs/toolkit'

export const DataReducer = createSlice({
    name : 'items',
    initialState : {
        dataList : [],
        
    },
    reducers : {
        initData : (state, action) => {
            state.dataList = action.payload;
        }
        
    }
})

export default DataReducer.reducer;
export const { initData } = DataReducer.actions;