import { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

export default function Detail({ music }) {
    let {id} = useParams();
    let info = music.find(data => {return data.id === Number(id)});

    useEffect(() => {
        document.getElementById("saleBox").className = "alert alert-warning";
        setTimeout(() => {
            document.getElementById("saleBox").className = "alert alert-warning d-none";
        }, 2000);
    }, []);

    return (
        <div className="container">
            <div id="saleBox" className="alert alert-warning">2초 이내 구매시 할인</div>
            <div className="row">
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + "/img/music" + (Number(id)+1) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{info.title}</h4>
                    <p>{info.content}</p>
                    <p>{info.price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    );
}