export interface AddProps {
    todo: string;
    time: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    setTime : React.Dispatch<React.SetStateAction<string>>
    handelAdd: (e: React.FormEvent) => void;
  }