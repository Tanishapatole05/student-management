// RatingInput.jsx
import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingInput = ({ onChange, initialRating }) => {
  const [rating, setRating] = React.useState(initialRating);

  const handleClick = (value) => {
    setRating(value);
    onChange(value);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => handleClick(ratingValue)}
            />
            <FaStar
              className="star"
              color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
              size={25}
            />
          </label>
        );
      })}
    </div>
  );
};

export default RatingInput;