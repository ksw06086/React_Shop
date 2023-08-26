import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Cart() {

    // Redux Store 가져와줌
    let state = useSelector((state) => state.cart);
    console.log(state);

    return (
        <div>
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
                    {state.map((data) => (
                        <tr key={data.id}>
                            <td>{data.id}</td>
                            <td>{data.name}</td>
                            <td>{data.count}</td>
                            <td>안녕</td>
                        </tr>
                    ))}
                </tbody>
            </Table> 
        </div>
    );
}