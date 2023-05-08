import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPost } from '../actions/index';

function Post(props) {
  const dispatch = useDispatch();
  const { postID } = useParams();

  useEffect(() => {
    dispatch(fetchPost(postID));
  }, []);

  return (
    <div>
      <h3>{postID}</h3>
      {/* <ul>
        {allPosts.map((post) => (
          <li key={post.id}>
            <div> ID: {`${post.id} /n`} </div>
            <img src={post.coverUrl} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.tags}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default Post;
