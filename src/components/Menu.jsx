import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
  return (
    <nav>
      <ul>
        {routes.map(route =>
          <li key={route.id}>
            <NavLink
              style={({ isActive }) => (isActive ? { color: 'red' } : { color: 'blue' })}
              to={route.to}
            >
              {route.textContent}
            </NavLink>
          </li>
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
});

routes.push({
  id: 2,
  to: '/blog',
  textContent: 'Blog',
});

routes.push({
  id: 3,
  to: '/profile',
  textContent: 'Profile',
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