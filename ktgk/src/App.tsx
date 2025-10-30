import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './posts/Navbar';
import PostList from './posts/PostList';
import PostForm from './posts/PostForm';
import PostDetail from './posts/PostDetail';
import { Post } from './posts/types';
import { samplePosts } from './posts/data';

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(samplePosts);

  const handleAddPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  const handleDeletePost = (id: string) => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<PostList posts={posts} onReadMore={(id) => {}} onDelete={handleDeletePost} />}
        />
        <Route
          path="/create"
          element={<PostForm onSubmit={handleAddPost} onCancel={() => {}} />}
        />
        <Route
          path="/posts/:id"
          element={<PostDetail posts={posts} onDelete={handleDeletePost} />}
        />
        <Route
          path="/posts/edit/:id"
          element={<PostForm onSubmit={() => {}} onCancel={() => {}} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
