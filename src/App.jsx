import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Nav, Container, Navbar, Row, Col } from "react-bootstrap";
import bg from "./img/jokebear.jpg";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Nari</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Work</Nav.Link>
            <Nav.Link href="#features">Project</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className="main-bg"></div>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p></p>
          </Col>
          <Col xs={12} md={4}>
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p></p>
          </Col>
          <Col xs={12} md={4}>
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            />
            <h4>상품명</h4>
            <p></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
