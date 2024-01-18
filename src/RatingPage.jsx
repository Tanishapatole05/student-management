// RatingPage.jsx
import React from 'react';
import RatingInput from './RatingInput';

function RatingPage() {
  const [rating, setRating] = React.useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
    console.log('Rated:', newRating);
  };

  return (
    <div>
      <h1>Rate the Course</h1>
      <p>Please provide your rating below:</p>
      <RatingInput onChange={handleRatingChange} initialRating={rating} />
      <p>Your current rating: {rating}</p>
    </div>
  );
}

export default RatingPage;