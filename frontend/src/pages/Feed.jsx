import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API_URL from '../config'

const Feed = () => {
  const [posts, setPosts] = useState([
    {
      _id: 1,
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
      caption: 'Initial post for harmony check! Neo-brutalism is awesome.'
    }
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API_URL}/posts`)
      .then((res) => {
        const fetchedPosts = res.data.posts.map((p, i) => ({
          ...p,
          author: p.author || `User_${p._id.substring(0, 4)}`,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${p._id || i}`,
          likes: Math.floor(Math.random() * 200) + 1
        }));
        setPosts(fetchedPosts.reverse());
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleDelete = (_id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      axios.delete(`${API_URL}/posts/${_id}`)
        .then(() => {
          setPosts(posts.filter(post => post._id !== _id));
        })
        .catch(err => {
          console.log(err);
          alert('Error deleting post');
        });
    }
  };

  return (
    <div className="app-wrapper">
      <div className="main-container">
        
        {/* Unified Header */}
        <header className="shared-header">
          <button type="button" className="brutal-btn" onClick={() => navigate('/')}>← Home</button>
          <h1 className="hero-title title-medium">Feed</h1>
          <button type="button" className="brutal-btn btn-orange" onClick={() => navigate('/create-post')}>+ New</button>
        </header>

        {/* Unified Content Area (Scrollable) */}
        <div className="content-area">
          <div className="post-list">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div key={post._id} className="feed-card">
                  <div className="feed-image">
                    <img src={post.image} alt="post" />
                  </div>
                  <div className="feed-caption" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                    <p style={{ flex: 1 }}>{post.caption}</p>
                    <button 
                      className="brutal-btn delete-btn" 
                      onClick={() => handleDelete(post._id)}
                      title="Delete Post"
                      style={{ padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', borderRadius: '12px', background: 'white' }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2m-6 5v6m4-6v6"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div style={{ textAlign: 'center', padding: '100px 0' }}>
                <h2 className="form-label">No posts yet!</h2>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Feed