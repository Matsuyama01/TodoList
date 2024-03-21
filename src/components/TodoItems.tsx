import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import EditIcon from '@mui/icons-material/Edit';

// Propsの型定義
interface TodoListProps {
  list: string[];
  handleDelete: (index: number) => void;
  handleEdit: (index: number, newValue: string) => void;
  searchText?: string; // 検索テキストのpropを追加
}

//Propsを使ってリスト欄を実装
const TodoItems: React.FC<TodoListProps> = ({
  list,
  handleDelete,
  handleEdit,
  searchText = '', // 検索テキストのデフォルト値を空文字に設定
}) => {
  // editIndexは編集中のリストアイテムのインデックスを保持し、editTextは編集中のテキストを保持する
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  // handleEditClick関数は、編集ボタンがクリックされたアイテムのインデックスとテキストをセットする
  const handleEditClick = (index: number, text: string) => {
    setEditIndex(index);
    setEditText(text);
  };

  // handleSaveClick関数は、編集を保存し、編集モードを終了する
  const handleSaveClick = (index: number) => {
    handleEdit(index, editText); // 編集内容を親コンポーネントに渡す
    setEditIndex(null); // 編集モードを終了
  };

  // アイテムが検索クエリに部分一致するかどうかをチェックし、
  // 一致する場合はハイライトスタイルを適用する
  const highlightItem = (item: string) => {
    // searchTextが空文字列またはundefinedでないことを確認し、部分一致をチェック
    return (
      searchText?.length > 0 &&
      item.toLowerCase().includes(searchText.toLowerCase())
    );
  };

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
              <>
                {editIndex === index ? (
                  // 保存アイコンボタン。クリックするとhandleSaveClickが呼ばれる
                  <IconButton
                    edge='end'
                    aria-label='save'
                    onClick={() => handleSaveClick(index)}
                  >
                    <SaveIcon />
                  </IconButton>
                ) : (
                  // 削除アイコンボタン。クリックするとhandleDeleteが呼ばれる
                  <IconButton
                    edge='end'
                    aria-label='delete'
                    onClick={() => handleDelete(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                )}
              </>
            }
            // 検索に一致したアイテムは異なる背景色でハイライト表示
            sx={{
              bgcolor: highlightItem(item) ? 'yellow' : 'inherit',
            }}
          >
            {editIndex === index ? (
              // 編集モード時はテキストフィールドを表示。入力値はeditTextを通して更新される
              <TextField
                value={editText}
                onChange={(e: {
                  target: { value: React.SetStateAction<string> };
                }) => setEditText(e.target.value)}
                fullWidth
              />
            ) : (
              // 通常モード時はリストアイテムテキストと編集アイコンボタンを表示
              <>
                <ListItemText primary={item} />
                <IconButton
                  edge='end'
                  aria-label='edit'
                  onClick={() => handleEditClick(index, item)}
                >
                  <EditIcon />
                </IconButton>
              </>
            )}
          </ListItem>
          {index < list.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </List>
  );
};

export default TodoItems;
