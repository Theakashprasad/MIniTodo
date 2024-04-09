import React, { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoAdd from "./TodoAdd";
import Todolist from "./Todolist";
import { todo } from "../types/Todo";
import { contexType } from "../types/ContextType";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useSpring, animated } from 'react-spring'


export const context = createContext<contexType | null>(null); //Creating context hear

// function starts hear
const Todo = () => {
  const [todo, setTodo] = useState<string>(""); //task
  const [time, setTime] = useState<string>(""); //Time
  //todo + time
  const [todos, setTodos] = useState<todo[]>([]);

  //for the new task Multiple
  const [completedTodos, setCompletedTodos] = useState<todo[]>([]);

  const handelAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      todo &&
      todo.trim() &&
      time.trim() &&
      !todos.some((item) => item.todo === todo.trim())
    ) {
      setTodos((todos) => [
        ...todos,
        { id: Date.now(), todo: todo, isDone: false, time: time },
      ]);
      setTodo("");
      setTime("");
      toast("TASK ADDED SUCCESFULLY");
    } else if (todos.some((item) => item.todo === todo.trim())) {
      toast("TASK EXIST");
    } else {
      toast("ADD TASK");
    }
  };
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    const active = todos;
    const complete = completedTodos;

    if (source.droppableId === "TodoList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodoList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(() => complete);
    setTodos(() => active);
  };

  const [flip, setFlip] = useState(false)
  
  const props = useSpring({
    to: {opacity: 1},
    from: {opacity: 0},
    reset: true,
    reverse: flip,
    delay: 200,
    onRest : () => setFlip(!flip)
  })

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <context.Provider
        value={{ todos, setTodos, completedTodos, setCompletedTodos }}
      >
        <div className="flex-col h-full">
          <ToastContainer />
          <div
            className=" pt-16  bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1517639493569-5666a7b2f494?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFuaW1lJTIwc2t5fGVufDB8fDB8fHww')",
            }}
          >
            <h1 className="font-extrabold text-3xl  dark:text-white text-center">
            <animated.div style={props}>
              TO DO LIST
      </animated.div>
            </h1>
            <TodoAdd
              todo={todo}
              handelAdd={handelAdd}
              setTodo={setTodo}
              setTime={setTime}
              time={time}
            />
            <hr className="m-9" />{" "}
          </div>
          <div className="flex justify-center w-full h-[500px] ">
            <Todolist />
          </div>
        </div>
      </context.Provider>
    </DragDropContext>
  );
};

export default Todo;
