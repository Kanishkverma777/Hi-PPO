import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreatePost from './pages/Create-Post.jsx'
import Feed from './pages/Feed.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/about" element={<About/>} />
      
      </Routes>
    </Router>
  )
}

export default App