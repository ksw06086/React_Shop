import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    let navigate = useNavigate();

    // 장점 : 1) 성공/실패/로딩중 쉽게 파악 가능, 2) 틈만나면 자동으로 재요청해줌, 3) 실페시 retry 알아서해줌, 4) state 공유 안해도됨, 5) ajax 결과 캐싱 기능(결과를 기억하고 있음, 요청시 먼저 기존데이터 우선 보여주고 그 다음 요청함)
    // result.data : 성공시 가져온 데이터
    // result.isLoading : 로딩중인지 true/false
    // result.error : 실패했는지 true/false
    let result = useQuery('data', ()=>{
      return axios.get('https://codingapple1.github.io/userdata.json').then((a)=>{
        return a.data;
      }),
      { staleTime : 2000 } // 재요청하는 시간주기(실시간 데이터 업데이트 할 때 필요한 부분)
    });


    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">MusicShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link onClick={()=>{ navigate('/'); }}>Home</Nav.Link>
                <Nav.Link onClick={()=>{ navigate('/cart'); }}>Cart</Nav.Link>
                </Nav>
                <Nav className='ms-auto'>반가워요 { result.isLoading && '로딩중' }{ result.data && result.data.name }{ result.error && '에러남' }</Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}