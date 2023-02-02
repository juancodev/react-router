import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../containers/auth';

const LoginPage = () => {
  const auth = useAuth();
  const [username, setUsername] = React.useState('');

  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  }

  if (auth.user) {
    <Navigate to="/profile" replace="true" />
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={login}>
        <label>Username</label>
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export { LoginPage };
