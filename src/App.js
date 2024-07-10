import React from 'react';
import Pic from './assets/images/illustration-article.svg';
import Logo from './assets/images/image-avatar.webp';
import './App.css'; // Import the CSS file for styling

const Card = () => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={Pic} alt="Card graphic" />
      </div>
      <div className="card-content">
        <span className="card-category">Learning</span>
        <p className="card-date">Published 21 Dec 2023</p>
        <h2 className="card-title">HTML & CSS foundations</h2>
        <p className="card-description">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>
        <div className="card-author">
          <img src={Logo} alt="Author" className="author-image" />
          <p className="author-name">Greg Hooper</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

