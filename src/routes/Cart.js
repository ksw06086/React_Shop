import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { plusCount, removeCart } from "../store/store";

export default function Cart() {

    // Redux Store 가져와줌
    let state = useSelector((state) => state);
    let dispatch = useDispatch();
    console.log(state);

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