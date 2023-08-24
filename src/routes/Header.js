import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    let navigate = useNavigate();

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">MusicShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link onClick={()=>{ navigate('/'); }}>Home</Nav.Link>
                <Nav.Link onClick={()=>{ navigate('/detail'); }}>Detail</Nav.Link>
                <Nav.Link href="#pricing">Cart</Nav.Link>
                </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}