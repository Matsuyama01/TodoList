import React from 'react';
import {
  signInWithPopup,
  signOut as firebaseSignOut,
  fetchSignInMethodsForEmail,
} from 'firebase/auth';
import { auth, GoogleProvider, githubProvider } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import TodoList from '../components/TodoList';

const TodoListPage: React.FC = () => {
  const [user] = useAuthState(auth);

  // Googleでサインイン
  const signInWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider);
  };

  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        console.log('GitHub Login Success:', result.user);
      })
      .catch((error) => {
        if (error.code === 'auth/account-exists-with-different-credential') {
          // 既存のアカウントのメールアドレスを取得
          const email = error.customData.email;

          // 既存のアカウントにリンクされている認証方法を取得
          fetchSignInMethodsForEmail(auth, email)
            .then((methods) => {
              console.log('Sign-in methods for this email:', methods);
              // ここでユーザーに既存の認証方法でのサインインを促すか、
              // アカウントをリンクするオプションを提供する
            })
            .catch((fetchError) => {
              console.error('Error fetching sign-in methods:', fetchError);
            });
        } else {
          console.error('GitHub Login Error:', error);
        }
      });
  };

  // サインアウト
  const signOut = () => {
    firebaseSignOut(auth);
  };

  // ユーザー情報を表示
  const UserInfo = () => {
    const user = auth.currentUser;
    if (!user) return null;

    const { displayName, photoURL } = user;

    return (
      <div>
        {photoURL && (
          <img
            src={photoURL}
            alt='User profile'
            style={{ width: 50, height: 50, borderRadius: '50%' }}
          />
        )}
        {displayName && <p>{displayName}</p>}
      </div>
    );
  };

  return (
    <div>
      {user ? (
        <>
          <UserInfo />
          <button onClick={signOut}>
            <p>サインアウト</p>
          </button>
          <TodoList /> {/* ここでToDoリストコンポーネントを表示 */}
        </>
      ) : (
        <>
          <button onClick={signInWithGoogle}>
            <p>Googleでサインイン</p>
          </button>
          <button onClick={signInWithGithub}>
            <p>GitHubでサインイン</p>
          </button>
        </>
      )}
      <Link to='/'>ホームに戻る</Link>
    </div>
  );
};

export default TodoListPage;
