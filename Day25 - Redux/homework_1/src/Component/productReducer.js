import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
    
    // ชื่อตัว Reducer
    name: "productReducer",

    // ชื่อตัว ค่าเริ่มต้นของ State
    initialState:  [{
        id: 1,
        img: "https://picsum.photos/id/113/367/267",
        name: "Glass",
        normalPrice: 200,
        sellPrice: 100,
        quantity: 20
    },
    {
        id: 2,
        img: "https://picsum.photos/id/113/367/267",
        name: "Glass",
        normalPrice: 45,
        sellPrice: 1,
        quantity: 30
    },
    {
        id: 3,
        img: "https://picsum.photos/id/113/367/267",
        name: "Glass",
        normalPrice: 45,
        sellPrice: 10,
        quantity: 30
    },
    {
        id: 4,
        img: "https://picsum.photos/id/113/367/267",
        name: "Glass",
        normalPrice: 45,
        sellPrice: 15,
        quantity: 30
    },
    {
        id: 5,
        img: "https://picsum.photos/id/113/367/267",
        name: "Glass",
        normalPrice: 45,
        sellPrice: 20,
        quantity: 30
    },
    {
        id: 6,
        img: "https://picsum.photos/id/113/367/267",
        name: "Glass",
        normalPrice: 45,
        sellPrice: 95,
        quantity: 30
    },
    {
        id: 7,
        img: "https://picsum.photos/id/113/367/267",
        name: "Glass",
        normalPrice: 45,
        sellPrice: 70,
        quantity: 30
    },
    {
        id: 8,
        img: "https://picsum.photos/id/113/367/267",
        name: "Glass",
        normalPrice: 45,
        sellPrice: 65,
        quantity: 30
    },
    {
        id: 9,
        img: "https://picsum.photos/id/113/367/267",
        name: "Glass",
        normalPrice: 45,
        sellPrice: 10,
        quantity: 30
    },
    {
        id: 10,
        img: "https://picsum.photos/id/113/367/267",
        name: "Glass",
        normalPrice: 45,
        sellPrice: 75,
        quantity: 30
    }],

    reducers: {
        insertData: (state, action) => {
            // console.log(action.payload);
            state.firstname = action.payload.Firstname
            state.lastname = action.payload.Lastname
            state.age = action.payload.Age
        }
    }
})

// Export Reducer
export default productReducer.reducer
// Export Action Can use in Reducer
export const { insertData } = productReducer.actions