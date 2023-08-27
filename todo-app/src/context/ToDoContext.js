import React, { createContext, useContext, useState } from "react";

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

  const values = {
    todos,
    setTodos,
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
