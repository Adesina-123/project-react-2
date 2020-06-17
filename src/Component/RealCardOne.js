import React from 'react';

const RealCardOne = ({cards}) => {
  return (
    <div className="card">
      <div className="card__2">
        <div className="container">
          <h4 className="text-size">
            {cards.name}
          </h4>
          <p className="text-two">{cards.items}</p>
        </div>
      </div>
    </div>
  );
};
export default RealCardOne;
