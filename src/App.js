import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CreatePost from './components/CreatePost';
import PostDetail from './components/PostDetails';
import About from './components/About';
import Footer from './components/Footer';
const App = () => {
  const [posts, setPosts] = useState([]);

  const handleCreatePost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route
            path="/create-post"
            element={<CreatePost categories={['Category 1', 'Category 2']} onCreatePost={handleCreatePost} />}
          />
            <Route path="post/:postId" element={<PostDetail />} />
            <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
