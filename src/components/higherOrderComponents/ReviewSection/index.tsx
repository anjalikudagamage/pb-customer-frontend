import React from "react";

interface Review {
  author: string;
  rating: number;
  comment: string;
}

const ReviewsSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div>
      <h2>Customer Reviews</h2>
      {reviews.map((review, index) => (
        <div key={index}>
          <strong>{review.author}</strong>
          <span> - Rating: {review.rating}</span>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsSection;
