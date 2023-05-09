import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../actions/index';

function Post(props) {
  const dispatch = useDispatch();
  const { postID } = useParams();
  const post = useSelector((store) => store.post.current);
  //   const CurrPost = useSelector((store) => store.post.current);

  useEffect(() => {
    dispatch(fetchPost(postID));
  }, []);

  return (
    <div>
      <h3>{postID}</h3>
      <div className="postcontent">
        {/* {allPosts.map((post) => ( */}
        {/* <li key={post.id}> */}
        {/* <div> ID: {`${post.id} /n`} </div> */}
        <img src={post.coverUrl} alt={post.title} />
        <h3>{post.title}</h3>
        <p>{post.tags}</p>
        {/* </li> */}
        {/* ))} */}
      </div>
    </div>
  );
}

export default Post;
