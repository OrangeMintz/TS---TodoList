import React from 'react'
import './style.css'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void
} 

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className="input_box"
      />

      <button type="submit" className="input_submit">
        Go
      </button>
    </form>
  );
};

export default InputField;