import React, { useState } from 'react';
import '../main.css';
import TodoForm from './TodoForm';
import TodoItems from './TodoItems';

const TodoList: React.FC = () => {
  //入力欄のリストを保存するための状態
  const [list, setList] = useState<string[]>([]);
  // 入力値を保持するための状態
  const [inputValue, setInputValue] = useState('');

  // テキスト入力時の処理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value); // 入力値を更新
  };

  // 追加ボタンを押したときの処理
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // フォーム送信によるページのリロードを防ぐ
    if (!inputValue.trim()) return; // 入力が空白のみの場合は追加しない
    setList([...list, inputValue]); // リストに入力値を追加
    setInputValue(''); // 入力欄をクリア
  };

  // リストからアイテムを削除する関数
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
