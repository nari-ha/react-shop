import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Nav, Container, Navbar, Row, Col } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  let [shoes] = useState(data);

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

      <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map(function (shoe, i) {
                    return <Card item={shoes[i]} i={i} />;
                  })}
                </Row>
              </Container>
            </>
          }
        />
        <Route path="/detail" element={<div>어바웃페이지임</div>} />
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <Col xs={12} md={4}>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{props.item.title}</h4>
      <p>{props.item.content}</p>
      <p>{props.item.price}</p>
    </Col>
  );
}

export default App;
