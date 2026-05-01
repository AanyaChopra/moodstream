import axios from 'axios';

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

const moodToSearchTerm = {
  happy: 'comedy',
  sad: 'drama',
  excited: 'action',
  relaxed: 'animation',
  angry: 'thriller',
  romantic: 'romance'
};

export const fetchMoviesByMood = async (mood) => {
  try {
    const searchTerm = moodToSearchTerm[mood];
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: searchTerm,
        type: 'movie',
        page: Math.ceil(Math.random() * 3)
      }
    });
    
    if (response.data.Response === 'True') {
      return response.data.Search || [];
    }
    return [];
  } catch (error) {
    console.error('Error fetching movies:', error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        s: query,
        type: 'movie'
      }
    });
    
    if (response.data.Response === 'True') {
      return response.data.Search || [];
    }
    return [];
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
};
