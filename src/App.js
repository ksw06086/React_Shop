// import mainImage from './img/background.jpg'; // src 폴더 내의 있는 이미지파일
// import subImage from './img/OIP.jpeg';        // src 폴더 내의 있는 이미지파일
import './App.css';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import data from './data';
import Detail from './routes/Detail';
import Main from './routes/Main';
import Header from './routes/Header';

function App() {
  
  let [music] = useState(data);
  
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main music={music} />} />
        <Route path="/detail/:id" element={<Detail music={music} />} />
        {/* <Route path="/event" element={<Event />} >
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route> */}
        <Route path="*" element={<div>없는페이지입니다.</div>} />
      </Routes>

    </div>
  );
}

// function Event() {
//   return (
//     <div>
//       <h4>오늘의 이벤트</h4>
//       <Outlet></Outlet>
//     </div>
//   );
// }

export default App;
