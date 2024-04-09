import { useContext  } from "react";
import { context } from "./Todo";
import { contexType } from "../types/ContextType";
import SingleTodo from "./Left";
import { Droppable } from "react-beautiful-dnd";
import Right from "./Right";
import TotalTime from "./TotalTime";
import Lottie from "lottie-react";
import animationData from '../assets/Animation - 1712645487275.json'
const Todolist = () => {

  const data = useContext<contexType | null>(context); // useContext
  if (!data) return <h1>nop</h1>; //important to handle any error or will not work

  const { todos, completedTodos } = data; //destructuring the data

  return (
  
    <div className=" flex justify-center w-full h-full">
      <Droppable droppableId="TodoList">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="w-1/3 bg-blue-200 flex-col h-full border-2 border-black ml-44"
          >
            <div className="flex justify-center bg-sky-400 h-14 p-4 shadow-2xl">
              <span className="font-bold">LEFT SIDE</span>
            </div>
            <div className="pl-14 ">
              {todos.map((item, index) => (
                <SingleTodo index={index} key={item.id} todo={item} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>{" "}
      <div>***</div>
      <Droppable droppableId="TodoRemove">
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="w-1/3 bg-blue-200 flex-col border-2 border-black"
          >
            <div className="flex justify-center bg-sky-400 h-14 p-4 shadow-2xl">
              <span className="font-bold">RIGHT SIDE</span>
            </div>
            <div className="text-center">
              <TotalTime />
            </div>
            <div className="pl-14 ">
              {completedTodos.map((item, index) => (
                <Right index={index} key={item.id} todo={item} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
      <div className="w-40 pt-60">
      <Lottie animationData={animationData}/>
      </div>
    </div>
      
  );
};

export default Todolist;
