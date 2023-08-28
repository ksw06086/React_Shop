import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { plusCount, removeCart } from "../store/store";
import { memo, useMemo, useState } from "react";

// memo : 특정상황에만 재렌더링해줌(props가 변할 때만 재렌더링해줌)
let Child = memo(function(){
    console.log('재렌더링됨');
    return <div>자식임</div>;
});

// Cart가 재렌더링 될 때마다 함수가 게속 실행되서 비효율적
function fx(){
    return (<div>반복문10억번 돌린결과</div>);
}

export default function Cart() {

    // useMemo와 useEffect의 차이 : useMemo는 html 보여지기 전 / useEffect는 html 보여준 후
    useMemo(() => {return fx()}, []); // useEffect와 똑같음, 컴포넌트 렌더링시 1회만 실행

    // Redux Store 가져와줌
    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    let [count, setCount] = useState(0);

    return (
        <div>
            {state.user.name}({state.user.age})의 장바구니
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {state.cart.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.count}</td>
                            <td><button onClick={()=>{ dispatch(plusCount(data.id)); }}>+</button>
                            <button onClick={()=>{ dispatch(removeCart(data.id)); }}>삭제</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table> 
        </div>
    );
}