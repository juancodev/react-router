import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { AuthProvider, AuthRoute } from './containers/auth';
import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';
import { BlogPost } from './components/BlogPost';
import { LoginPage } from './components/LoginPage';
import { LogoutPage } from './components/LogoutPage';
import { ProfilePage } from './components/ProfilePage';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <Menu />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/blog/:slug' element={<BlogPost />} />
            <Route path='/login' element={<LoginPage />} />
            <Route
              path='/logout'
              element={
                <AuthRoute>
                  <LogoutPage />
                </AuthRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <AuthRoute>
                  <ProfilePage />
                </AuthRoute>
              }
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
