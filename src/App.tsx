import React, { useState } from 'react';
import './main.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <form onSubmit={handleSubmit} className='form'>
          {/* MUIのテキスト欄を使用 */}
          <TextField
            id='outlined-basic'
            label='リストを追加してください'
            variant='outlined'
            size='small'
            onChange={handleChange}
            value={inputValue}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            className='button'
          >
            追加
          </Button>
        </form>
        <h3 className='listTitle'>今日やること</h3>

        {/* ここにテキスト欄からのリストを受け取る */}
        <List
          sx={{
            width: '100%',
            bgcolor: 'lightblue',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {/* テキスト欄を表示 */}
          {list.map((item, index) => (
            <React.Fragment key={index}>
              {/* 削除機能 */}
              <ListItem
                secondaryAction={
                  <IconButton
                    edge='end'
                    aria-label='delete'
                    onClick={() => handleDelete(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={item} />
              </ListItem>
              {index < list.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </div>
    </div>
  );
};

export default App;
