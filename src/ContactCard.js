import React, { useState } from 'react';
import './ContactCard.css'; // Create a CSS file for styling

const ContactCard = ({ imageUrl, name }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`contact-card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default ContactCard;
