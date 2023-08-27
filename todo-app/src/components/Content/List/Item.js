import React from 'react'
import { useTodo } from '../../../context/ToDoContext'

function Item() {
  return (
      <ul className="todo-list">
            {todos.map((todo) => (
                <Item key={todo.id} todo={todo}></Item>
            ))};
            
      </ul>
  )
}

export default Item