import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { fetchPosts } from '../actions/index';

function Posts(props) {
  const dispatch = useDispatch();
  const allPosts = useSelector((store) => store.posts.all);
  console.log(allPosts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <ul className="postlist">
        {allPosts.map((post) => (
          <li key={post.id} className="littlepost">
            <NavLink to={`/posts/${post.id}`}>
              <img src={post.coverUrl} alt={post.title} className="image" />
              <div className="texts">
                <ReactMarkdown>{post.title || ''}</ReactMarkdown>
                <ReactMarkdown>{post.tags || ''}</ReactMarkdown>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
