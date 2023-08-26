import { useState } from 'react';
import Card from './Card';
import axios from 'axios';
import { click } from '@testing-library/user-event/dist/click';

export default function Main({ music }) {
    let [subData, setSubData] = useState([]);
    let [clickCnt, setClickCnt] = useState(2);
    let [loading, setLoading] = useState('');
    
    return (
        <>
            <div className='main-bg' style={{ backgroundImage : `url(${process.env.PUBLIC_URL + '/img/background.jpg'})` }}></div>

            <div className='container'>
                <div className='row'>
                {music.map(info => (<Card info={info} key={info.id} />))}
                </div>
                <div className='row'>
                {subData.map(info => (<Card info={info} key={info.id} />))}
                </div>
                <div>{loading}</div>
            </div>
            <button onClick={()=>{
                if(clickCnt > 3) { setLoading('더이상 상품이 없습니다.'); return null; }
                setLoading('로딩중입니다.');
                axios.get(`https://codingapple1.github.io/shop/data${clickCnt}.json`)
                    .then(({ data })=>{
                        console.log(data);
                        setSubData(subData.concat(data));
                        setClickCnt(clickCnt+1);
                        setLoading('');
                    })
                    .catch((err)=>{
                        console.log(err.message);
                        setLoading('');
                    });
                
                // 값을 보내고 싶을 때
                // axios.post('/sadfaef', {
                //     name : 'kim',
                // })

                // 요청 두개를 동시에 보내고 모두 성공했을 때 코드 실행 원할 때
                // Promise.all([ axios.get('/url1'), axios.get('/url2') ])
                // .then(() => {

                // });
            }}>더보기</button>
        </>
    );
}