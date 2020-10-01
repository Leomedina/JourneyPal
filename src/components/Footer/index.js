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
          <strong> leo </strong></a>
       | GitHub repository can be found
       <a href="https://github.com/Leomedina/JourneyPal"
          target="_blank"
          rel="noopener noreferrer" >
          <strong> here</strong></a>.
    </small>
    </div >
  );
};

export default Footer;