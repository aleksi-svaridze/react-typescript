import { useState } from "react";
import Input from "./components/Input";
import { Todo } from "./types/interfaces";
import TodoList from "./components/TodoList";



const App:React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddtodo = (e:React.FormEvent) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id: Math.random(), todo: todo, isDone: false}]);
      setTodo('');
    }
  }

  console.log(todos)

  return (
    <div className="bg-blue-500 w-full h-screen pt-10 uppercase font-neucha">
      <h1 className="text-center text-3xl text-white">taskify</h1>
      <Input 
        todo={todo} 
        setTodo={setTodo} 
        handleAddtodo={handleAddtodo}
      />

      <div className="grid grid-cols-2 w-2/3 gap-x-4 mx-auto mt-8 p-4 bg-blue-700 rounded-lg">
        <div className="flex flex-col gap-y-3">
         <TodoList todos={todos} setTodos={setTodos} />
        </div>

        <div className="bg-orange-300">

        </div>
      </div>

    </div>
  );
}

export default App;
