import { Draggable } from "react-beautiful-dnd";
import { todo } from "../types/Todo";

const ForNow = ({ todo, index }: { todo: todo; index: number }) => {
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="bg-gradient-to-r from-blue-300 to-blue-600 m-5 px-16 py-2 w-[350px] flex border border-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
       <div className="flex w-full">
                <span className=" ">{index + 1}</span> )
                <p className="text-center w-full rounded-2xl text-xl font- text-white  ">{todo.todo}</p>
                <p className="text-center w-full rounded-2xl text-xl font- text-white  ">{todo.time}</p>
              </div>
        </div>
      )}
    </Draggable>
  );
};

export default ForNow;
