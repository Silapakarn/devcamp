import { createSlice } from '@reduxjs/toolkit'

export const addString = createSlice({
    // ชื่อตัว Reducer
    name: 'calculate',
    // ชื่อตัว ค่าเริ่มต้นของ State
    initialState: {
        name: 'SIlapakarn'
    },
    // ชื่อ Action ใน Reducer
    reducers: {
        Kan: state => {
            state.name += 'Kan'
        },
        Kon: state => {
            state.name += 'Dragon'
        },
        SIlapakarn: state => {
            state.name = 'SIlapakarn'
        }
    }
})
// Export Reducer
export default addString.reducer
// Export Action ที่สามารถใช้ได้ใน Reducer
export const { Kan, Kon, SIlapakarn } = addString.actions
