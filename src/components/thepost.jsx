import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown';
import { faSquareCheck, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { fetchPost, updatePost, deletePost } from '../actions/index';

function Post(props) {
  const post = useSelector((store) => store.posts.current);
  console.log('post from store', post);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { postID } = useParams();

  const [isEditing, editingMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedText, setEditedText] = useState('');
  const [editedCover, setEditedCover] = useState('');
  const [editedTags, setEditedTags] = useState('');

  const handleEditClick = () => {
    editingMode(true);
    if (post) {
      setEditedCover(post.coverUrl);
      setEditedTitle(post.title);
      setEditedTags(post.tags);
      setEditedText(post.content);
    }
  };

  const handleSaveClick = () => {
    const update = async () => {
      await dispatch(updatePost({
        title: editedTitle,
        content: editedText,
        coverUrl: editedCover,
        tags: editedTags,
      }, postID));
    };
    update();
    editingMode(false);
  };

  const handleDeleteClick = () => {
    const remove = async () => {
      await dispatch(deletePost(postID, navigate));
    };
    remove();
  };

  const handleTitleChange = (event) => {
    setEditedTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setEditedText(event.target.value);
  };

  const handleCoverChange = (event) => {
    setEditedCover(event.target.value);
  };

  const handleTagsChange = (event) => {
    setEditedTags(event.target.value);
  };

  useEffect(() => {
    const fetch = async () => {
      await dispatch(fetchPost(postID));
      if (post) {
        console.log('redux state inspection', post);
        setEditedCover(post.coverUrl);
        setEditedTitle(post.title);
        setEditedTags(post.tags);
        setEditedText(post.content);
      }
    };
    fetch();
  }, []);

  if (isEditing) {
    return (
      <div className="postcontent">
        <div className="inputs">
          <input onChange={handleCoverChange} value={editedCover || ''} placeholder={post.coverUrl} />
          <input onChange={handleTitleChange} value={editedTitle || ''} placeholder={post.title} />
          <textarea onChange={handleTextChange} value={editedText} placeholder={post.content} />
          <input onChange={handleTagsChange} value={editedTags || ''} placeholder={post.tags} />
        </div>
        <FontAwesomeIcon icon={faSquareCheck} size="lg" onClick={handleSaveClick} />
      </div>
    );
  } else {
    return (
      <div>
        <FontAwesomeIcon className="delete" icon={faTrashCan} size="lg" onClick={handleDeleteClick} />
        <FontAwesomeIcon className="edit" icon={faPencil} size="lg" onClick={handleEditClick} />
        <div className="postcontent">
          <img src={post.coverUrl} alt={post.title} className="image" />
          <ReactMarkdown>{post.title || ''}</ReactMarkdown>
          <ReactMarkdown>{post.content || ''}</ReactMarkdown>
          <ReactMarkdown>{post.tags || ''}</ReactMarkdown>
        </div>
      </div>
    );
  }
}

export default Post;
