import React from "react";
import { todo } from "./Todo"

export  interface contexType {
    todos:  todo[]
    setTodos:  React.Dispatch<React.SetStateAction<todo[]>>;
    completedTodos :todo[]
    setCompletedTodos:  React.Dispatch<React.SetStateAction<todo[]>>
  }