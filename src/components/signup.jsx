import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { signupUser } from '../actions/index';

function NewPost(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editedEmail, setEditedEmail] = useState('');
  const [editedPassword, setEditedPassword] = useState('');

  const handleAddUser = () => {
    const newUser = {
      email: editedEmail,
      password: editedPassword,
    };

    const create = async () => {
      const newuser = await dispatch(signupUser(newUser, navigate));
      if (newuser) {
        setEditedEmail(newuser.email);
        setEditedPassword(newuser.password);
      }
    };
    create();
    setEditedEmail('');
    setEditedPassword('');
  };

  const handleEmailChange = (event) => {
    setEditedEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setEditedPassword(event.target.value);
  };

  return (
    <div className="signin">
      <div className="inputs">
        <input onChange={handleEmailChange} value={editedEmail || ''} placeholder="email" />
        <input onChange={handlePasswordChange} value={editedPassword || ''} placeholder="password" />
      </div>
      <FontAwesomeIcon icon={faSquareCheck} size="lg" onClick={handleAddUser} />
    </div>
  );
}

export default NewPost;
