import React, { useState } from 'react';
import '../main.css';
import TodoForm from './TodoForm';
import TodoItems from './TodoItems';

const TodoList: React.FC = () => {
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setList([...list, inputValue]);
    setInputValue('');
  };

  const handleDelete = (indexToRemove: number) => {
    setList((currentList) =>
      currentList.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className='App'>
      <div>
        <h2 className='title'>Todoリスト</h2>
        <TodoForm
          inputValue={inputValue}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <h3 className='listTitle'>今日やること</h3>
        <TodoItems list={list} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default TodoList;
