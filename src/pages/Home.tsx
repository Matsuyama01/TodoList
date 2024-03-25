import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      <h1>アプリを開発中！</h1>
      <ul>
        <li>
          <Link to='/todolist'>Todoリスト</Link>
        </li>
        <li>開発中</li>
      </ul>
    </div>
  );
};

export default Home;
