import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { createPost } from '../actions/index';

function NewPost(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editedTitle, setEditedTitle] = useState('');
  const [editedText, setEditedText] = useState('');
  const [editedCover, setEditedCover] = useState('');
  const [editedTags, setEditedTags] = useState('');

  const handleAddPost = () => {
    const newPost = {
      title: editedTitle,
      content: editedText,
      coverUrl: editedCover,
      tags: editedTags,
    };

    const create = async () => {
      const newpost = await dispatch(createPost(newPost, navigate));
      if (newpost) {
        setEditedCover(newpost.coverUrl);
        setEditedTitle(newpost.title);
        setEditedTags(newpost.tags);
        setEditedText(newpost.content);
      }
    };
    create();
    setEditedCover('');
    setEditedTitle('');
    setEditedTags('');
    setEditedText('');
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

  return (
    <div className="postcontent">
      <div className="inputs">
        <input onChange={handleCoverChange} value={editedCover || ''} placeholder="cover url" />
        <input onChange={handleTitleChange} value={editedTitle || ''} placeholder="title" />
        <textarea onChange={handleTextChange} value={editedText || ''} placeholder="content" />
        <input onChange={handleTagsChange} value={editedTags || ''} placeholder="tags" />
      </div>
      <FontAwesomeIcon icon={faSquareCheck} size="lg" onClick={handleAddPost} />
    </div>
  );
}

export default NewPost;
