import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../containers/auth';

const Menu = () => {
  const auth = useAuth();

  return (
    <nav>
      <ul>
        {routes.map(route => {
          if (route.private && !auth.user) return null;
          if (route.textContent === 'Login' && auth.user) return null;
          return (
            <li key={route.id}>
              <NavLink
                style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'blue' })}
                to={route.to}
              >
                {route.textContent}
              </NavLink>
            </li>);
        }
        )}
      </ul>
    </nav>
  )
};

const routes = [];
routes.push({
  id: 1,
  to: '/',
  textContent: 'Home',
  private: false,
});

routes.push({
  id: 2,
  to: '/blog',
  textContent: 'Blog',
  private: false,
});

routes.push({
  id: 3,
  to: '/profile',
  textContent: 'Profile',
  private: true,
});
routes.push({
  id: 4,
  to: '/login',
  textContent: 'Login',
  private: false,
});
routes.push({
  id: 5,
  to: '/logout',
  textContent: 'Logout',
  private: true,
});

/*
  NavLink with code imperative
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'blue' })}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'blue' })}
            to="/blog"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'blue' })}
            to="/profile"
          >
            Profile
          </NavLink>
*/

/*
  With Link!!
         <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        */

export { Menu };