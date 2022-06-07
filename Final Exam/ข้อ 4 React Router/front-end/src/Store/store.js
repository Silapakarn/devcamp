import { configureStore } from "@reduxjs/toolkit";
import DataReducer from '../Reducer/DataReducer'


const store = configureStore({
    reducer: {

        dataReducer: DataReducer

    }
})

export default store