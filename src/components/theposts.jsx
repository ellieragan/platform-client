import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchPosts } from '../actions/index';
// import Nav from './navbar';

function Posts(props) {
  // const { postlist } = props;
  const dispatch = useDispatch();
  const allPosts = useSelector((store) => store.posts.all);
  console.log(allPosts);
  // const loading = useSelector((store) => store.posts.loading);
  // const error = useSelector((store) => store.posts.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div>
      <ul>
        {allPosts.map((post) => (
          <li key={post.id}>
            <NavLink to={`/posts/${post.id}`}>
              <img src={post.coverUrl} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.tags}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

// const mapStateToProps = (store) => {
//   return {
//     posts: store.posts.all,
//   };
// };

// const mapDispatchToProps = {
//   fetchPosts,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Posts);

export default Posts;
