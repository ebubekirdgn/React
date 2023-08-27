import React from 'react'
import { useTodo } from '../../../context/ToDoContext'

function Item({todo}) {
  return (
      <li key={todo.id} className={todo.completed ? "completed" : ""}>
        <div className="view">
            <input className="toggle" type="checkbox" defaultChecked = {todo.completed} onChange={}></input>
            <label>{todo.tex}</label>
            <button className="destroy"></button>
        </div>
      </li>
  )
}

export default Item