import { createSlice } from "@reduxjs/toolkit";

export const CreateReducer = createSlice({ 

    // ชื่อตัว Reducer
    name: "CreateReducer",

    // ชื่อตัว ค่าเริ่มต้นของ State
    initialState: {
        Product_name: "BoxDragon",
        Stock_Left: 45,
        Category: 'Box'
    },

     // ชื่อ Action ใน Reducer
    reducers: {
        changeProductname: (state, Product_name) => {
        state.Product_name = Product_name.payload;
        },
        changeStockLeft: (state, Stock_Left) => {
        state.Stock_Left = Stock_Left.payload;
        },
        changeCategory: (state, Category) => {
            state.Category = Category.payload;
        },
    }
})

// Export Reducer
export default CreateReducer.reducer;
// Export Action ที่สามารถใช้ได้ใน Reducer
export const { changeProductname, changeStockLeft, changeCategory } = CreateReducer.actions;