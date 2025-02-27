import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";

function Detail(props) {
  let { id } = useParams();
  let pid = props.shoes.find((x) => x.id == id);
  let [num, setNum] = useState("");
  let [alert, setAlert] = useState(true);
  let [tab, setTab] = useState(0);

  useEffect(() => {
    let a = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      //cleanup function
      clearTimeout(a);
    };
  }, [num]);

  return (
    <div className="container">
      {alert == true ? <Alert /> : null}
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
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(0) }} eventKey="link0">버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(1) }} eventKey="link1">버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={()=>{ setTab(2) }} eventKey="link2">버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab}/>
    </div>
  );
}


function TabContent({tab}) {
  // if (tab == 0) {
  //   return <div>내용1</div>
  // } else if (tab == 1) {
  //   return <div>내용2</div>
  // } else {
  //   return <div>내용3</div>
  // }
  let [fade, setFade] = useState('')

  useEffect(()=>{
    let a = setTimeout(()=>{setFade('end')}, 100)
    
    return ()=> {
      clearTimeout(a)
      setFade('')
    }
  }, [tab])

  return (<div className={`start ${fade}`}>
    {[<div>내용1</div>,<div>내용2</div>,<div>내용3</div>][tab]}
  </div>)
}

function Alert(props) {
  return <div className="alert alert-warning">2초 이내 구매시 할인</div>;
}
export default Detail;
