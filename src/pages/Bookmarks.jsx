import React from 'react';
import MovieCard from '../components/MovieCard';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Bookmark } from 'lucide-react';

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', []);

  const handleBookmark = (movie) => {
    setBookmarks(bookmarks.filter(b => b.imdbID !== movie.imdbID));
  };

  const isBookmarked = (movieId) => {
    return bookmarks.some(b => b.imdbID === movieId);
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Bookmark size={40} />
            Your Bookmarks
          </h2>
          <p className="text-xl text-white text-opacity-90">
            Movies you've saved for later
          </p>
        </div>

        {bookmarks.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-white text-xl">No bookmarks yet. Start saving your favorite movies! 📚</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {bookmarks.map(movie => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                onBookmark={handleBookmark}
                isBookmarked={isBookmarked(movie.imdbID)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
