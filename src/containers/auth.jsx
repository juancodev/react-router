import React from 'react'
import { useNavigate, Navigate } from 'react-router-dom';

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(undefined);

  const login = ({ username }) => {
    setUser({ username });
    navigate('/profile');
  };

  const logout = () => {
    setUser(undefined);
    navigate('/');
  };

  const auth = { user, login, logout };

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const auth = React.useContext(AuthContext);
  return auth;
};

const AuthRoute = (props) => {
  const auth = useAuth();

  if (!auth.user) {
    return <Navigate to="/login" replace="true" />
  }

  return props.children;
}

export {
  AuthProvider,
  AuthRoute,
  useAuth
}