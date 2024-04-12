import { useState } from "react";
import Todo from "./components/Todo";
import DigitalClock from "./components/Bg";

const App = () => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <main className={theme}>  
      <div className="dark:bg-black">
        <Todo theme={theme} setTheme={setTheme} />
        <DigitalClock/>
      </div>
    </main>
  );
};

export default App;
