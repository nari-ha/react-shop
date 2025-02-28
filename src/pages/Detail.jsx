import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { addItem } from './../store.jsx';
import { Context1 } from "./../App.jsx";


function Detail(props) {
  let { stock } = useContext(Context1);
  let dispatch = useDispatch();

  let { id } = useParams();
  let pid = props.shoes.find((x) => x.id == id);
  let [num, setNum] = useState("");
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);
  let [tran, setTran] = useState("");

  useEffect(() => {
    let a = setTimeout(() => {
      setTran("end");
    }, 200);
    return () => {
      //cleanup function
      setTran("");
      clearTimeout(a);
    };
  }, []);

  return (
    <div className={`container start ${tran}`}>
      {/* {alert == true ? <Alert /> : null} */}
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
        type="text"
      ></input>
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (parseInt(id) + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{pid.title}</h4>
          <p>{pid.content}</p>
          <p>{pid.price}</p>
          <button className="btn btn-danger" onClick={() => {
            dispatch(addItem({id : pid.id, name : pid.title, count : 1}));
          }}>
            주문하기
          </button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link0"
          >
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link1"
          >
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link2"
          >
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} shoes={props.shoes} />
    </div>
  );
}

function TabContent({ tab, shoes }) {
  // if (tab == 0) {
  //   return <div>내용1</div>
  // } else if (tab == 1) {
  //   return <div>내용2</div>
  // } else {
  //   return <div>내용3</div>
  // }
  let [fade, setFade] = useState("");
  let { stock } = useContext(Context1);

  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {
        [
          <div>
            {shoes[0].title}내용1{stock}
          </div>,
          <div>내용2</div>,
          <div>내용3</div>,
        ][tab]
      }
    </div>
  );
}

function Alert(props) {
  return <div className="alert alert-warning">2초 이내 구매시 할인</div>;
}
export default Detail;
