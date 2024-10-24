import { useEffect, useState } from 'react';
import './App.css'

//COMPONENTS
import InputField from './components/InputField'
import TodoList from "./components/TodoList";
//MODEL
import Todo from "./models/todo";

const  App : React.FC = () => {
  
  const [todo, setTodo] = useState<string>("")

  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {

    if(todo){
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
    }
    else{
      console.log("No Todo")
    }
      setTodo("");
    e.preventDefault();
  };

  useEffect(() => {
    console.log(todos)
  }, [todos])
  

  return (
    <div className="App">
      <span className="heading">Taskitty</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <br/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App
