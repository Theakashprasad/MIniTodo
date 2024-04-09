import { useContext, useEffect, useRef, useState } from "react";
import { todo } from "../types/Todo";
import { context } from "./Todo";
import { contexType } from "../types/ContextType";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Draggable } from "react-beautiful-dnd";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoIosDoneAll, IoMdCloseCircleOutline } from "react-icons/io";

const SingleTodo = ({ todo, index }: { todo: todo; index: number }) => {
  //for the edit
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  //for the foucus
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, [edit]);

  //for the data from the usecontext
  const data = useContext<contexType | null>(context);
  if (!data) return <h1>nop</h1>;
  const { todos, setTodos } = data;

  /////////////////////////////////////////////////////   HANDLE"s    ///////////////////////////////////////////////////////////////////

  //DONE
  const handelDone = (id: number) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...todo, isDone: !item.isDone } : item
      )
    );
    toast("TASK COMPLETED SUCCESFULLY");
  };

  //DELETE
  const handelDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id != id));
    toast("DELETED SUCCESFULLY");
  };

  //EDIT
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id == id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
    toast("TASK EDITED SUCCESFULLY");
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className="bg-gradient-to-r from-blue-300 to-blue-600 m-5 px-16 py-2 w-[350px] flex border border-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          <form
            action=""
            onSubmit={(e) => handleEdit(e, todo.id)}
            className="w-full"
          >
            {edit ? (
              <>
                <label htmlFor="" className="text font-bold">
                  Edit -{" "}
                </label>
                <input
                  ref={ref}
                  className="text-center bg-slate-200 rounded-xl"
                  value={editTodo}
                  onChange={(e) => setEditTodo(e.target.value)}
                />
              </>
            ) : todo.isDone ? (
              <s>
                <div className="flex w-full">
                  <span className=" ">{index + 1}</span> )
                  <p className="text-center w-full rounded-2xl text-xl font- text-white  ">
                    {todo.todo}
                  </p>
                  <p className="text-center w-full rounded-2xl text-xl font- text-white  ">
                    {todo.time}
                  </p>
                </div>
              </s>
            ) : (
              <div className="flex w-full">
                <span className=" ">{index + 1}</span> )
                <p className="text-center w-full rounded-2xl text-xl font- text-white  ">
                  {todo.todo}
                </p>
                <p className="text-center w-full rounded-2xl text-xl font- text-white  ">
                  {todo.time}
                </p>
              </div>
            )}

            <div className="space-x-3 flex justify-around w-full h-5 pt-1  bg-blue-400 rounded ">
              <span
                className="text-blue-600"
                onClick={() => {
                  if (!edit && !todo.isDone) {
                    setEdit(true);
                  }
                }}
              >
                <MdEdit className="w-4" />
              </span>
              <span
                onClick={() => handelDelete(todo.id)}
                className="text-red-600"
              >
                <MdDelete />
              </span>
              <span
                onClick={() => handelDone(todo.id)}
                className="text-green-600"
              >
                {todo.isDone ? (
                  <IoMdCloseCircleOutline style={{ color: "red" }} />
                ) : (
                  <IoIosDoneAll />
                )}
              </span>
            </div>
          </form>
        </div>
      )}
    </Draggable>
  );
};
export default SingleTodo;
