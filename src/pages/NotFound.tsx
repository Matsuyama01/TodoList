import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <Link to='/'>ホームに戻る</Link>
    </div>
  );
};

export default NotFound;
