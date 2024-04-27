import { User, Person } from "./types/types";
import { NewUser, NewPerson } from "./types/interfaces";
import { hasJSDocParameterTags } from "typescript";

function App() {

  let name: string = 'alex';
  let age: number = 42;
  let isStudent: boolean = true;

  // Union
  let secretNumber: number | string = 2
  secretNumber = 'two'

  // Arrays
  let skills: string[] = ['js','css','html','reactjs'];
  let count: number[] = [1,2,3,4,5,6,7,8,9,0];

  // Tuples
  let role: [number, string] = [42, 'Alex']; 

  // Object
  const user: NewUser = {
    name: 'alex',
    age: 42,
    isStudent: true,
  }

  // Array of objects
  const users: NewUser[] = [
    {name: 'me', age: 89, isStudent: false},
    {name: 'she', age: 120}
  ]

  // Extended Types
  const me: Person = {
    name: 'me',
    age: 42,
    gender: 'male',
    isStudent: true,
    hasJob: false
  }

  // Extended Interfeces
  const newUser: NewPerson = {
    name: 'Alex',
    age: 42,
    gender: 'male',
    hasJob: false,
    isStudent: true,
  }

  // functions
  // 1.
  const checkUser = (name: string) => {
    console.log(name)
  }
  checkUser('Alex')
  // 2.
  // const userChecked: (name: string) => void;

  console.log(me)
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
