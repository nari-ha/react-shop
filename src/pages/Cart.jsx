import { Table } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";

function Cart() {
  let state = useSelector((state) => state.cart);
  console.log(state[0].name);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.map(function (e, i) {
            return (
              <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.count}</td>
                <td><button>edit</button></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;
