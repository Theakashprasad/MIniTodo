import { AddProps } from "../types/TodoAddType";
import TrieExport from "./Trie";

const TodoAdd = ({ todo, time, setTodo, setTime, handelAdd }: AddProps) => {

  return (
    <>
      <div className="flex justify-center mt-10 gap-5">
        <input
          type="text"
          className="bg-gray-100 p-2 border border-black rounded-l-full"
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Enter a task"
          value={todo}
        />
        <input
          type="time"
          onChange={(e) => setTime(e.target.value)}
          className="bg-gray-100 p-2 border border-black "
          value={time}
        />
        <button
          type="submit"
          className="bg-blue-500   00 focus:ring-2 focus:ring-blue-300 focus:outline-none focus:ring-opacity-50 active:bg-blue-600 dark:text-white font-semibold p-3 rounded-r-full border border-black shadow-md transition duration-150 ease-in-out transform hover:scale-105"
          onClick={handelAdd} // Ensure your event handler is correctly spelled
        >
          ADD
        </button>
      </div>
      <div className="text-center">
        <TrieExport todo={todo} setTodo={setTodo}/>
      </div>
    </>
  );
};

export default TodoAdd;
