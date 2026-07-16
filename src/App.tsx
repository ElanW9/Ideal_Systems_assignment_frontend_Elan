import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostsOverview from './pages/PostsOverview';
import PostDetail from './pages/PostDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/posts/" element={<PostsOverview />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
