import React from 'react';
import './index.css';

function Footer() {
  return (
    <div className="footer">
      <small>
        built by
        <a href="https://www.linkedin.com/in/medinaleonardo/"
          target="_blank"
          rel="noopener noreferrer">
          <strong> <span>leo</span> </strong></a>
       | GitHub repository can be found
       <a href="https://github.com/Leomedina/JourneyPal"
          target="_blank"
          rel="noopener noreferrer" >
          <strong> <span>here</span> </strong></a>.
    </small>
    </div >
  );
};

export default Footer;