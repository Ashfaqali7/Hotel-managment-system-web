import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function MyAppBar() {
  return (
    <>
      <Navbar className='NavBar' bg="info" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Hotel Management</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto ">
            <Link className='navLink' to="/home">Home</Link>
            <Link className='navLink' to="/features">booking</Link>
            <Link className='navLink' to="/pricing">Pricing</Link>
          </Nav>
          <Nav.Link href="/signup">SignUp</Nav.Link>
            <Nav.Link href="/login">LogIn</Nav.Link>
            <Nav.Link href="/admin">Admin</Nav.Link>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyAppBar;