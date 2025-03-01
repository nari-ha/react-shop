import { Table } from "react-bootstrap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName, changeAge } from './../store/userSlice.jsx';
import { changeCount, deleteItem } from './../store.jsx';

function Cart() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let obj = {watched: ''}
    // let obj = {name: 'kim'}
  // localStorage.setItem('data', JSON.stringify(obj));

  return (
    <div>
        <h6>{state.user.name} {state.user.age}의 장바구니</h6>
        <button onClick={()=>{
            dispatch(changeAge(10))
        }}>button</button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((e, i)=> {
            return (
              <tr key={i}> 
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.count}</td>
                <td>
                    <button onClick={()=>{
                        dispatch(changeCount(e.id))
                    }}>edit</button>
                </td>
                <td>
                    <button onClick={()=>{
                        dispatch(deleteItem(e.id))
                    }}>del
                    </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
