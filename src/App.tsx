import { useState } from "react";
import Input from "./components/Input";


const App:React.FC = () => {
  const [todo, setTodo] = useState<string>('');

  return (
    <div className="bg-blue-500 w-full h-screen pt-10 uppercase font-neucha">
      <h1 className="text-center text-3xl text-white">taskify</h1>
      <Input 
        todo={todo} 
        setTodo={setTodo} 
      />
    </div>
  );
}

export default App;
