import { useContext, useEffect, useState } from "react";
import { context } from "./Todo";
import { contexType } from "../types/ContextType";

const Total = () => {
  const data = useContext<contexType | null>(context);
  const [totalTime, setTotalTime] = useState(0);
  if (!data) return <h1>nop</h1>; //important to handle any error or will not work
  const { completedTodos,  } = data;

  const calculateTotalTime = () => {
    let totalHours = 0;
    completedTodos.forEach((time) => { 
      const [hours, minutes] = time.time.split(":").map(Number);
      totalHours += hours * 60 + minutes;
    });
    return totalHours;
  }; 

  useEffect(() => {
    setTotalTime(calculateTotalTime());
  });

  const hours = Math.floor(totalTime / 60);
  const minutes = totalTime % 60; 
 
  return (
    <div>
      <p className="font-mono dark:text-white">
        Total Time: {hours} hours {minutes} minutes
      </p>
   
    </div>
  );
};

export default Total;
