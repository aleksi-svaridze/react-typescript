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
    setTodo: React.Dispatch<React.SetStateAction<string>>
}