import React from "react";
import StarRatingComponent from "react-star-rating-component";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <h5>{movie.movieName}</h5>
      <img src={movie.movieImg} />
      <StarRatingComponent
        name="rate2"
        editing={false}
        starCount={5}
        value={movie.movieRating}
      />
    </div>
  );
};

export default MovieCard;
