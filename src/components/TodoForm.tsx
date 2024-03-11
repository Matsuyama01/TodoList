import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// Propsの型定義
interface TodoFormProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

//Propsを使ってテキスト欄を実装
const TodoForm: React.FC<TodoFormProps> = ({
  inputValue,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className='form'>
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
  );
};

export default TodoForm;
