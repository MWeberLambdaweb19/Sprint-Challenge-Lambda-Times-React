import React from 'react';

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.cardProps.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.cardProps.img} alt="An image" />
        </div>
        <span>By {props.cardProps.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.

export default Card;
