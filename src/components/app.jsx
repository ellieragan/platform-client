import React from 'react';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import Counter from './counter';
import Controls from './controls';
import Posts from './theposts';
import Post from './thepost';
import Nav from './navbar';

function NewPost(props) {
  return (
    <div>
      make a new post
      <Counter />
      <Controls />
    </div>

  );
}

function App(props) {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Nav />
      </div>
      <div className="content">
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/:postID" element={<Post />} />
          <Route path="*" element={<div>post not found </div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// function FallBack(props) {
//   return (
//     <div>URL Not Found</div>
//   );
// }

//   const root = createRoot(document.getElementById('main'));
// root.render(<App />);
export default App;
