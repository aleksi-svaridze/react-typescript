export interface NewUser {
    name: string;
    age: number;
    isStudent?: boolean;
}

export interface NewPerson extends NewUser {
    gender: string,
    hasJob: boolean,
}

export interface Todo {
    id: number;
    todo: string;
    isDone: boolean;
}