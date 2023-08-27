import React from "react";
import { useTodo } from "../../../context/ToDoContext";

function List() {
  const {todos} = useTodo();
  console.log(todos);
  return (
    <div>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="view">
              <input className="toggle" type="checkbox" defaultChecked={todo.completed} />
              <label>{todo.text}</label>
              <button className="destroy"></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
