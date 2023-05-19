import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Posts from './theposts';
import Post from './thepost';
import Nav from './navbar';
import NewPost from './newpost';
import RequireAuth from './requireAuth';

function App(props) {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Nav />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/new" element={<RequireAuth> <NewPost /> </RequireAuth>} />
          <Route path="/posts/:postID" element={<Post />} />
          <Route path="*" element={<div>post not found </div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
