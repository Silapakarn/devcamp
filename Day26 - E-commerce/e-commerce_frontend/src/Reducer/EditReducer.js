import { createSlice } from "@reduxjs/toolkit";

export const EditReducer = createSlice({

    //name Reducer
    name : "EditReducer",

    //name State
    initialState :[],
    
    // Action Reducer
    reducers :{
        insertData : (state, action) =>{
            state.push(action.payload)
        },
        editDat : (state,action)=>{
        }
    }
})


// export reducer
export default EditReducer.reducer

// export Action Can use in reducer 
export const { insertData } =  EditReducer.actions;