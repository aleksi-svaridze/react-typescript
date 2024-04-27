import { TodosProps } from "../types/types";



 const TodoList: React.FC<TodosProps> = ({todos, setTodos}) => {
  return (
    <div>
       {
            todos.map(todo => (
              <div key={todo.id} className="bg-blue-300 p-2 rounded-md text-xs cursor-pointer hover:text-orange-500">
                {todo.todo}
              </div>
            ))
          }
    </div>
  )
}
export default TodoList;