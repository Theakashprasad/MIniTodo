import { useState } from "react";
import Todo from "./components/Todo";

const App = () => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <main className={theme}>
      <div className="dark:bg-black">
        <Todo theme={theme} setTheme={setTheme} />
      </div>
    </main>
  );
};

export default App;
