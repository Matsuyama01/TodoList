import React, { useState } from 'react';
import './main.css';

const App: React.FC = () => {
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

  return (
    <div className='App'>
      <div>
        <h2 className='title'>Todoリスト</h2>
        <form onSubmit={handleSubmit} className='form'>
          <input
            type='text'
            onChange={handleChange}
            value={inputValue}
            className='inputtext'
          />
          <input type='submit' value='追加' className='buttun' />
        </form>
        <h3 className='listTitle'>今日やること</h3>
        <ul>
          {list.map((item, index) => (
            <li key={index} className='list'>
              {item}
              {/* リストの各項目を表示 */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
