import React from 'react';
import './styles.css';

const Button = ({name}) => {
  return (
    <div className="button">
      <p>
        <input type="button" value={name}/>
      </p>
    </div>
    
  )
}

export default Button;