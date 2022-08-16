import React, { useState } from "react";
import "./Todolist.css";
import TodoItemList from './TodoItemList'
export default function Todo() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const listItem = () => {
    setList((s) => {
      return [...s, item];
    });
    setItem("");
   
  };

  const deleteTask = (a) => {
    const finalData = list.filter((curr, index) => {
      return index !== a;
    });
    setList(finalData);
  };

  return (
    <>
    <div className='todo-app'>
      
    <div className="container">
      <h1>TODO APP</h1>

      <div className="list-container">
       
          <input
          value={item}
          type="text"
          placeholder="Type here..."
          onChange={(e) => {
            setItem(e.target.value);
          }}
        />
       
        
        <button className='add-button' onClick={listItem}>Add </button>
        
        {list.map((lists, index) => {
          return <TodoItemList key={index} id={index} del={deleteTask} li={lists} />;
        })}
        

        
      </div>
    </div>
    </div>
    </>
  );
}