import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import API_URL from '../config'

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    axios.post(`${API_URL}/create-post`, formData)
    .then((res) => {
        navigate('/feed');
        console.log(res); 
    })
    .catch ((err) => {
        console.log(err);
        alert('Error creating post');
    });
  }

  return (
    <div className="app-wrapper">
      <div className="main-container">
        
        {/* Unified Header */}
        <header className="shared-header">
          <button type="button" className="brutal-btn" onClick={() => navigate(-1)}>← Back</button>
          <h1 className="hero-title title-medium">Create</h1>
          <div style={{width: '90px'}}></div> {/* Spacer */}
        </header>

        {/* Unified Content Area */}
        <div className="content-area">
          <form className="brutal-form" onSubmit={handleSubmit}>
            
            <div className="form-field">
              <label className="form-label">Add Image</label>
              <div className="upload-zone">
                <input type="file" name="image" accept="image/*" required />
              </div>
            </div>

            <div className="form-field">
              <label className="form-label">Caption</label>
              <input 
                type="text" 
                name="caption" 
                className="text-input" 
                placeholder="Write something cool..." 
                required 
              />
            </div>

            <button type="submit" className="home-card btn-orange" style={{padding: '24px', width: '100%'}}>
              <h2>Post It!</h2>
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default CreatePost