import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
    name : 'user',
    initialState : { name : 'kim', age : 20 },
    reducers : {
        setUser(state) {
            state.age += 1;
        },
        increase(state, action) {
            state.age += action.payload;
        }
    }
});

export let { setUser, increase } = user.actions

export default user;