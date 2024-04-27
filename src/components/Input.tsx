import { useRef } from 'react'
import { TodoProps } from '../types/types'

// const Input:React.FC<TodoProps> = ({todo, setTodo}) => {
//   return (
//     <form className='relative w-1/2 bg-black rounded-full mx-auto mt-8'>
//         <input type='text' 
//             value={todo}
//             onChange={(e) => setTodo(e.target.value)}
//             placeholder='Enter the task..' 
//             className='h-12 rounded-full pl-4 pr-12 w-full focus:outline-none focus:shadow-[0px_0px_10px_1000px_rgba(0,0,0,0.3)] shadow-black shadow-inner' />
//         <button className='absolute text-white hover:scale-90 transition-all rounded-full w-10 h-10 right-1 top-1 text-xs bg-blue-500'>Add</button>
//     </form>
//   )
// }

// export default Input


const Input = ({todo, setTodo, handleAddtodo}: TodoProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

    return (
      <form 
      onSubmit={(e) => {
        handleAddtodo(e);
        inputRef.current?.blur();
      }}
        className='relative w-1/2 bg-black rounded-full mx-auto mt-8'>
          <input type='text' 
            ref={inputRef}
            value={todo}
            onChange={e => setTodo(e.target.value)}
            placeholder='Enter the task..' 
            className='h-12 rounded-full pl-4 pr-12 w-full focus:outline-none focus:shadow-[0px_0px_10px_1000px_rgba(0,0,0,0.3)] shadow-black shadow-inner' />
          <button
            className='absolute text-white hover:scale-90 transition-all rounded-full w-10 h-10 right-1 top-1 text-xs bg-blue-500'>
              Add
          </button>
      </form>
    )
  }
  
  export default Input