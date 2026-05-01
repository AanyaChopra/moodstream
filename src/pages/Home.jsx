import React, { useState } from 'react';
import MoodSelector from '../components/MoodSelector';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';
import { fetchMoviesByMood, searchMovies } from '../services/api';
import { moodMessages } from '../utils/moodMapping';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMood, setSelectedMood] = useState(null);
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', []);

  const handleMoodSelect = async (mood) => {
    setLoading(true);
    setSelectedMood(mood);
    const results = await fetchMoviesByMood(mood);
    setMovies(results);
    setLoading(false);
  };

  const handleSearch = async (query) => {
    setLoading(true);
    setSelectedMood(null);
    const results = await searchMovies(query);
    setMovies(results);
    setLoading(false);
  };

  const handleBookmark = (movie) => {
    const exists = bookmarks.some(b => b.imdbID === movie.imdbID);
    if (exists) {
      setBookmarks(bookmarks.filter(b => b.imdbID !== movie.imdbID));
    } else {
      setBookmarks([...bookmarks, movie]);
    }
  };

  const isBookmarked = (movieId) => {
    return bookmarks.some(b => b.imdbID === movieId);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How are you feeling today?
          </h2>
          <p className="text-xl text-white text-opacity-90">
            Select your mood and get personalized recommendations
          </p>
        </div>

        <div className="mb-8">
          <MoodSelector onSelectMood={handleMoodSelect} />
        </div>

        <div className="mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        {selectedMood && !loading && movies.length > 0 && (
          <div className="text-center mb-6">
            <p className="text-white text-xl font-semibold bg-white bg-opacity-20 inline-block px-6 py-2 rounded-full">
              {moodMessages[selectedMood]}
            </p>
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="text-white text-xl">Loading movies... 🎬</div>
          </div>
        )}

        {!loading && movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map(movie => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                onBookmark={handleBookmark}
                isBookmarked={isBookmarked(movie.imdbID)}
              />
            ))}
          </div>
        )}

        {!loading && movies.length === 0 && selectedMood && (
          <div className="text-center py-20">
            <p className="text-white text-xl">No movies found. Try another mood! 🎬</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
