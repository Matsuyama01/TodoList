import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface TodoListProps {
  list: string[];
  handleDelete: (index: number) => void;
}

const TodoItems: React.FC<TodoListProps> = ({ list, handleDelete }) => {
  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'lightblue',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      {list.map((item, index) => (
        <React.Fragment key={index}>
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
  );
};

export default TodoItems;
