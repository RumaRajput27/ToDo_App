import React from "react";

function TodoList(props) {
  return (
    <li className="list-items">
      {props.items}
      <span className="icons">
        <i
          className="fa-solid fa-trash icon-delete"
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        ></i>
      </span>
    </li>
  );
}
export default TodoList;
