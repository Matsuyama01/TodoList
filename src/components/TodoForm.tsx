import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface TodoFormProps {
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

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
