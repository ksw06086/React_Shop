import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from './userSlice';

// Redux : 컴포넌트 간 props 없이 state 공유 가능
// js 파일을 만들어 state를 보관하고 모든 컴포넌트가 그 값을 가져다 쓰는 방향
// 사용법 : react, react-dom이 18.1.0 이상이어야 함
// 1. @redux 설치(npm install @reduxjs/toolkit react-redux) 
// 2. index.js 수정

// useState() 역할
let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
    ],
    reducers : {
        plusCount(state, action){
            const info = state.find((data) => data.id === action.payload);
            info.count += 1;
        },
        cartAdd(state, action){
            state.push({ id : state.length + 1, ...action.payload});
        }
    }
});

export let { plusCount, cartAdd } = cart.actions;

export default configureStore({
    reducer: {
        user : user.reducer,
        cart : cart.reducer
    }
})