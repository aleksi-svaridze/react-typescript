export interface NewUser {
    name: string;
    age: number;
    isStudent?: boolean;
}

export interface NewPerson extends NewUser {
    gender: string,
    hasJob: boolean,
}