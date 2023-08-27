import React, { createContext, useContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "React",
      completed: false,
    },
    {
      id: 2,
      text: "Js",
      completed: true,
    },
  ]);

  const addTodo  = (text) => setTodos((prev) => [...prev,{id : uuidv4(),text ,completed:false}])

  const values = {
    todos,
    addTodo,
  };
  return <ToDoContext.Provider value={values}>{children}</ToDoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(ToDoContext);

  if (context === undefined) {
    throw new Error("useToDo hook must be call inside TodoProvider component");
  }
  return context;
};
