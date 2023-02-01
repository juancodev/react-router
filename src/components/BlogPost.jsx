import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogdata } from '../api/blogdata';

const BlogPost = () => {
  const { slug } = useParams();
  const blogpost = blogdata.find(post => post.slug === slug);
  const navigate = useNavigate();

  const returnBlogList = () => {
    navigate('/blog');
    //navigate(-1); = Equivalent to going backwards like the arrows in the browser
  }

  return (
    <>
      <h2>{blogpost.title}</h2>
      <p>{blogpost.author}</p>
      <p>{blogpost.content}</p>
      <button onClick={returnBlogList}>Back</button>
    </>
  );
};

export { BlogPost };
