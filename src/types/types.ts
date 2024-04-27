import { Todo } from "./interfaces";

export type User = {
    name: string;
    age: number;
    isStudent: boolean;
}

export type Person = User & {
    gender: string;
    hasJob: boolean;
}

export type TodoProps = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAddtodo: (e:React.FormEvent) => void;
}

export type TodosProps = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}