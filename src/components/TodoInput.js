import React, { useState } from "react";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter Your To-do"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      />
      <button
        className="Add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        Add Items
      </button>
    </div>
  );
}
export default TodoInput;
