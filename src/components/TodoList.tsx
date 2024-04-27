import { TodosProps } from "../types/types";
import SingleTodoItem from "./SingleTodoItem";


 const TodoList: React.FC<TodosProps> = ({todos, setTodos}) => {
    

  return (
    <>
       {
            todos.map(todo => (
                <SingleTodoItem 
                    todos={todos}
                    setTodos={setTodos}
                    todo={todo}
                />
            ))
        }
    </>
  )
}
export default TodoList;