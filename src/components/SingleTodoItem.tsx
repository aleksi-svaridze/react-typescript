import { CiEdit, CiTrash } from "react-icons/ci";
import { MdOutlineDone } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { SingleTodosProps } from "../types/types";

export default function SingleTodoItem({todo, todos, setTodos}:SingleTodosProps) {
    const [edit, setEdit] = useState<boolean>(false);
    const [editedTodo, setEditedTodo] = useState<string>(todo.todo)

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])

    const handleTodoDone = (id:number) => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo));
    }

    const handleTodoDelete = (id:number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const handleEdit = (e:React.FormEvent, id:number) => {
        e.preventDefault()
        setTodos(
            todos.map(todo => todo.id !== id ? {...todo, todo: editedTodo} : todo)
        )
        setEdit(false);
    }
  return (
    <form 
        onSubmit={e => handleEdit(e, todo.id)}
        key={todo.id} 
        className="bg-blue-300 p-2 flex items-center justify-between rounded-md text-xs cursor-pointer">
        {
            edit ? 
            (<input
                ref={inputRef} 
                value={editedTodo}
                onChange={e => setEditedTodo(e.target.value)}
                className="h-full rounded-md py-1 focus:outline-none"/>) 
            : 
            todo.isDone ? 
            (<span className="line-through">{todo.todo}</span>)
            :
            ( <span>{todo.todo}</span>)
        }
        <div className="flex gap-x-2">
            <CiEdit className="w-4 h-4" onClick={() => {if(!edit && !todo.isDone) setEdit(!edit)}}/>
            <CiTrash className="w-4 h-4" onClick={() => handleTodoDelete(todo.id)}/>
            <MdOutlineDone className="w-4 h-4" onClick={() => handleTodoDone(todo.id)}/>
        </div>
    </form>
  )
}
