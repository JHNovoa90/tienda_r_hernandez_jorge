
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <>
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">E-GameProject</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Pc</Nav.Link>
      <Nav.Link href="#features">Nintendo</Nav.Link>
      <Nav.Link href="#pricing">XBOX</Nav.Link>
      <Nav.Link href="#pricing">PS5</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
</>
  )
}

export default NavBar