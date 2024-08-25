import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]);
  };
  const deleteListItems = (key) => {
    let newlistTodo = [...listTodo];
    newlistTodo.splice(key, 1);
    setListTodo([...newlistTodo]);
  };

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">ToDo</h1>
        <hr />
        {listTodo.map((listItems, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              items={listItems}
              deleteItem={deleteListItems}
            />
          );
        })}
      </div>
    </div>
  );
}
export default App;
