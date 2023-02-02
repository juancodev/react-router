import React from 'react';
import { useAuth } from '../containers/auth';

const ProfilePage = () => {
  const auth = useAuth();
  const { user } = auth;

  console.log(user);
  return (
    <>
      <h1>Profile</h1>
      <p>Welcome, {auth.user.username}</p>
    </>
  )
};

export { ProfilePage };