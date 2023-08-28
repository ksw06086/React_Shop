import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { cartAdd } from "../store/store";
import { useDispatch } from "react-redux";

export default function Detail({ music }) {
    let {id} = useParams();
    let info = music.find(data => {return data.id === Number(id)});
    let [alert, setAlert] = useState(true);
    let [count, setCount] = useState(1);
    let [tab, setTab] = useState(0);
    const dispatch = useDispatch();
    const history = useNavigate();
    
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem('watched'));
        data.push(info.id);
        data = new Set(data); data = Array.from(data);
        localStorage.setItem('watched', JSON.stringify(data));
    })

    useEffect(() => {
        let a = setTimeout(() => {
            setAlert(false);
        }, 2000);
        
        // useEffect 동작 전에 실행되는 실행문 > ex setTimeout 이전꺼는 제거
        return () => {
            clearTimeout(a); // 타이머 제거
        }
    }, []);

    return (
        <div className="container">
            
            <div className="row mb-3">
                {
                    alert === true ? <div id="saleBox" className="alert alert-warning">2초 이내 구매시 할인</div> : null
                }
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + "/img/music" + (Number(id)+1) + ".jpg"} width="100%" alt=""/>
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{info.title}</h4>
                    <input type="text" onInput={(e) => {
                        if(isNaN(e.target.value)) { 
                            e.target.value = '1';
                            window.alert("숫자만 입력해주세요.");
                            return null; 
                        }
                        setCount(Number(e.target.value));
                    }} placeholder="수량 입력란" />
                    <p>{info.content}</p>
                    <p>{info.price}원</p>
                    <button className="btn btn-danger" onClick={()=>{
                        let cart = {
                            id : info.id,
                            name : info.title,
                            count : count
                        }
                        dispatch(cartAdd(cart));
                        history('/cart');
                    }}>주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />
             
        </div> 
    );
}

function TabContent({tab}){
    let [fade, setFade] = useState('');

    useEffect(()=>{ 
        // react 18버전 이상 : automatic batching 기능
        // (스테이트 변경 함수를 쓸때마다 재랜더링이 아니라 마지막에만 랜더링을 시켜줌)
        let a = setTimeout(()=>{ setFade('end'); }, 10);

        return () => {
            clearTimeout(a);
            setFade('');
        }
    }, [tab])

    return (
        <div className={`start ${fade}`}>
            {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>
    );
}