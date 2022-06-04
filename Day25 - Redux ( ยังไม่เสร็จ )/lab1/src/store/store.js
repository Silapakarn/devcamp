
import { configureStore } from '@reduxjs/toolkit'
import calculateReducer from '../calculateReducer'
import addString from '../addString'

const store = configureStore({
    reducer: {
        counter: calculateReducer,
        addString: addString
        
    }
})

export default store

