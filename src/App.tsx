import React, { useState } from 'react';

const App: React.FC = () => {
  const [list, setList] = useState([]);
  // テキスト入力時の処理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  // 追加ボタンを押したときの処理
  const onClick = () => {};

  return (
    <div className='App'>
      <div>
        <h2>Todoリスト</h2>
        <button onClick={}>追加</button>
        <input type='text' onChange={handleChange} className='inputtext' />
        <ul>
          リスト
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default App;
