import { useState, useTransition } from "react";

let a = new Array(10000).fill(0);

// useTransition  : 느린 컴포넌트 성능향상
// 조작 후에 0.2초 넘게 반응없다면 유저 다 떠남
export default function Transition_Ex() {
    let [name, setName] = useState('');
    // 1. 선언 -> 2. 문제의 state변경 감싸기
    // isPending : startTransition 처리중일 때 true로 변함
    let [isPending, startTransition] = useTransition();

    return (
        <div>
            <input onChange={(e)=>{ 
                startTransition(()=>{
                    setName(e.target.value);
                })
            }} />
            {
                a.map(()=>{
                    return <div>{name}</div>;
                })
            }
        </div>
    );
}