import React from 'react';
import { Bookmark, Star } from 'lucide-react';

const MovieCard = ({ movie, onBookmark, isBookmarked }) => {
  const title = movie.Title || 'Untitled';
  const year = movie.Year || 'N/A';
  const posterUrl = movie.Poster && movie.Poster !== 'N/A' 
    ? movie.Poster 
    : 'https://via.placeholder.com/500x750?text=No+Poster';
  const rating = movie.imdbRating !== 'N/A' ? parseFloat(movie.imdbRating).toFixed(1) : 'N/A';
  const plot = movie.Plot || 'No description available.';

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img 
          src={posterUrl} 
          alt={title}
          className="w-full h-80 object-cover"
        />
        <button
          onClick={() => onBookmark(movie)}
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg hover:scale-110 transition"
        >
          <Bookmark 
            size={20} 
            fill={isBookmarked ? '#FF6B6B' : 'none'}
            color={isBookmarked ? '#FF6B6B' : '#666'}
          />
        </button>
        
        {rating !== 'N/A' && (
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 rounded-full px-2 py-1 flex items-center gap-1">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="text-white text-sm font-semibold">{rating}/10</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-1 line-clamp-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{year}</p>
        <p className="text-gray-700 text-sm line-clamp-3">{plot}</p>
      </div>
    </div>
  );
};

export default MovieCard;
