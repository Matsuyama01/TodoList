import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import TodoList from './components/TodoList';

function Home() {
  const [user] = useAuthState(auth);

  return (
    <div>
      {user ? (
        <>
          <UserInfo />
          <SignOutButton />
          <TodoList />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}

export default Home;

// Googleでサインイン
function SignInButton() {
  const signInWithGoogle = () => {
    //firebaseを使ってサインイン
    signInWithPopup(auth, provider);
  };

  return (
    <button onClick={signInWithGoogle}>
      <p>Googleでサインイン</p>
    </button>
  );
}

// Googleでサインアウト
function SignOutButton() {
  return (
    <button onClick={() => auth.signOut()}>
      <p>サインアウト</p>
    </button>
  );
}

function UserInfo() {
  // photoURLが存在する場合のみ<img>に渡し、そうでなければ<img>をレンダリングしない
  const photoURL = auth.currentUser?.photoURL as string;
  return (
    <div>{photoURL ? <img src={photoURL} alt='User profile' /> : null}</div>
  );
}
