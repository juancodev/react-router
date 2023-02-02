import React from 'react'
import { useAuth } from '../containers/auth';

const LogoutPage = () => {
  const auth = useAuth();

  const logout = (e) => {
    e.preventDefault();
    auth.logout();
  }


  return (
    <>
      <h1>Logout</h1>
      <form onSubmit={logout}>
        <label>Do you sure want out?</label>

        <button type='submit'>Logout</button>
      </form>
    </>
  );
};

export { LogoutPage };
