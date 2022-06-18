import { configureStore } from "@reduxjs/toolkit";
import EditReducer from "../Reducer/EditReducer"
import CreateReducer from '../Reducer/CreateReducer'
import productReducer from '../Reducer/productReducer'

const store = configureStore({
    reducer: {
        CreateReducer: CreateReducer,
        EditReducer: EditReducer,
        product: productReducer
    }
})

export default store