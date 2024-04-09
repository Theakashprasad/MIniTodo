import { useContext } from "react";
import { context } from "./Todo";
import { contexType } from "../types/ContextType";

const SubCal = () => {
  const data = useContext<contexType | null>(context);
  if (!data) return <h1>nop</h1>; //important to handle any error or will not work
  const { completedTodos, setCompletedTodos } = data;

  const formatTime = (hours: number, minutes: number): string => {
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutes).padStart(2, "0");
    return `${formattedHours}:${formattedMinutes}`;
  };
  function minusEachItem(num:number) {
    const lenght = completedTodos.length
    const minusValue = num/lenght
    const updatedTimes = completedTodos.map((time) => { 
      const [hours, minutes] = time.time.split(":").map(Number);  
      let totalMinutes = hours * 60 + minutes - (minusValue ); // Subtracting 5 minutes 
      if (totalMinutes < 0) { 
        totalMinutes = 0; // Ensuring time doesn't go negative 
      }   
      const newHours = Math.floor(totalMinutes / 60); 
      const newMinutes = totalMinutes % 60;
      const newTime = formatTime(newHours, newMinutes); 
      return { ...time, time: newTime }; // Update only the time property
    });
    setCompletedTodos(updatedTimes);
  }
   
  return (
    <div className="space-x-3"> 
<button
  onClick={() => minusEachItem(5)}
  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl text-sm transition duration-150 ease-in-out"
>
  REMOVE 5
</button>
<button
  onClick={() => minusEachItem(10)}
  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-xl text-sm transition duration-150 ease-in-out"
>
  REMOVE 10
</button>
    </div>
  );
};

export default SubCal;
