import { createSlice, nanoid } from '@reduxjs/toolkit';
const initialState = { value: 1 }
export const MyToDosSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        AddCount: (state, action) => {
            state.value++;
        },
        DeleteCount: () => {
            state.value--;
        }
    }
});

export const { AddCount, DeleteCount } = MyToDosSlice.actions;
export default MyToDosSlice.reducer;