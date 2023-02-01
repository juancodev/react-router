import React from 'react';
import { Link } from 'react-router-dom';
import { blogdata } from '../api/blogdata';

const BlogPage = () => {
  return (
    <>
      <h1>BlogPage</h1>
      <ul>
        {blogdata.map(post => (
          <BlogLink key={post.slug} post={post} />
        ))}
      </ul>
    </>
  );
};

const BlogLink = ({ post }) => {
  return (
    <li>
      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
    </li>
  )
};

export { BlogPage };
