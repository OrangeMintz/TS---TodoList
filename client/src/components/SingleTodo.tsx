import React from 'react'
import Todo from '../models/todo';
import { CiEdit, CiTrash, CiCircleCheck } from "react-icons/ci";


interface Props {
  todo: Todo,
  todos: Todo[],
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>,
} 

const SingleTodo: React.FC<Props> = ({todo, todos, setTodos}) => {

    const handleDone = (id:number) =>{
        // setTodos(todos.map((todo) => todo.id === id?{...todo, isDone: !todo.isDone}: todo ))
        setTodos(todos.map((todo) => {
            if(todo.id === id){
              return {...todo, isDone: !todo.isDone};  
            };
            return todo
        }))
    }

  return (
    <form className="todos_single">
      {todo.isDone ? (
        <s className="todos_single--text">{todo.todo}</s>
      ) : (
        <span className="todos_single--text">{todo.todo}</span>
      )}
      <div>
        <span className="icon">
          <CiEdit />
        </span>
        <span className="icon">
          <CiTrash />
        </span>

        <span className="icon">
          <CiCircleCheck onClick={() => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo