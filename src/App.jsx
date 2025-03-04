import { createContext, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Nav, Container, Navbar, Row, Col } from "react-bootstrap";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./pages/Detail.jsx";
import Cart from "./pages/Cart.jsx";
import axios from "axios";

export let Context1 = createContext();

function App() {

  useEffect(()=>{
    if (localStorage.getItem('watched')) {
    } else {
      localStorage.setItem('watched', JSON.stringify([]))
    }
  },[])
  let watched = localStorage.getItem('watched');
  watched = JSON.parse(watched);

  // let obj = {name: 'kim'}
  // localStorage.setItem('data', JSON.stringify(obj));
  // let tmp = localStorage.getItem('data');
  // console.log(JSON.parse(tmp));
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [more, setMore] = useState(0);
  let [stock, setStock] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Nari</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link onClick={() => {
                navigate("/cart");
              }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}
      <h5>Recent clicked</h5>
      <div>
        {watched.map((e, i) =>{
          return (
            <div>{shoes[e].title}</div>
          )
        })}
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map(function (shoe, i) {
                    return <Card item={shoes[i]} i={i} key={i} />;
                  })}
                </Row>
              </Container>
              {more == 2 ? null : (
                <button
                  onClick={() => {
                    switch (more) {
                      case 0:
                        axios
                          .get("https://codingapple1.github.io/shop/data2.json")
                          .then((result) => {
                            let tmp = [...shoes, ...result.data];
                            setShoes(tmp);
                          })
                          .catch(() => {
                            console.log("failed!");
                          });
                        setMore(1);
                        return;
                      case 1:
                        axios
                          .get("https://codingapple1.github.io/shop/data3.json")
                          .then((result) => {
                            let tmp = [...shoes, ...result.data];
                            setShoes(tmp);
                          })
                          .catch(() => {
                            console.log("failed!");
                          });
                        setMore(2);
                        return;
                      case 2:
                        console.log("이제없음!");
                        return;
                    }
                  }}
                >
                  Button
                </button>
              )}
            </>
          }
        />
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ stock }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />
        <Route path="/cart" element = {
          <div>
            <Cart/>
          </div>
        }
        />
        <Route path="/event" element={<EventPage />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>
    </div>
  );
}

function EventPage() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  );
}

function Card(props) {
  return (
    <Col xs={12} md={4}>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.item.id + 1) +
          ".jpg"
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
