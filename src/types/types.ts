export type User = {
    name: string;
    age: number;
    isStudent: boolean;
}

export type Person = User & {
    gender: string;
    hasJob: boolean;
}