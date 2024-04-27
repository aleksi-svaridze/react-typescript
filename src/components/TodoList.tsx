import { TodosProps } from "../types/types";
import { CiEdit, CiTrash } from "react-icons/ci";
import { MdOutlineDone } from "react-icons/md";


 const TodoList: React.FC<TodosProps> = ({todos, setTodos}) => {
  return (
    <>
       {
            todos.map(todo => (
              <div key={todo.id} className="bg-blue-300 p-2 flex items-center justify-between rounded-md text-xs cursor-pointer">
                <span>{todo.todo}</span>
                <div className="flex gap-x-2">
                    <CiEdit className="w-4 h-4"/>
                    <CiTrash className="w-4 h-4"/>
                    <MdOutlineDone className="w-4 h-4"/>
                </div>
              </div>
            ))
          }
    </>
  )
}
export default TodoList;