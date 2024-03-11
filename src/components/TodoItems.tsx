import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

// Propsの型定義
interface TodoListProps {
  list: string[];
  handleDelete: (index: number) => void;
}

//Propsを使ってリスト欄を実装
const TodoItems: React.FC<TodoListProps> = ({ list, handleDelete }) => {
  return (
    // Listコンポーネントでリスト欄を表示。スタイルを設定して見た目を整える
    <List
      sx={{
        width: '100%',
        bgcolor: 'lightblue',
        borderRadius: '16px',
        overflow: 'hidden',
      }}
    >
      {/* リスト欄の項目をmap関数で一つずつ処理し、リストアイテムとして表示 */}
      {list.map((item, index) => (
        // React.Fragmentを使って、複数の要素をグループ化。key属性にindexを使用※React.Fragmentの使用理由とkey属性にindexを当てているのも不明
        <React.Fragment key={index}>
          {/* ListItemコンポーネントでToDoリストの各項目を表示 */}
          <ListItem
            // secondaryActionプロパティで、削除ボタンを右側に表示
            secondaryAction={
              <IconButton
                edge='end' // ボタンをリストの右端に配置
                aria-label='delete'
                onClick={() => handleDelete(index)} // 削除ボタンがクリックされたときの処理
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            {/* ListItemTextコンポーネントでリスト欄のテキストを表示 */}
            <ListItemText primary={item} />
          </ListItem>
          {/* スタイル設定でDividerコンポーネントでリストアイテム間に区切り線を表示。最後の項目以外に表示 */}
          {index < list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default TodoItems;
