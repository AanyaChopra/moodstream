import React from 'react';
import { Smile, Frown, Zap, Wind, Flame, Heart } from 'lucide-react';

const MoodSelector = ({ onSelectMood }) => {
  const moods = [
    { id: 'happy', name: 'Happy', icon: Smile, color: '#FFD93D' },
    { id: 'sad', name: 'Sad', icon: Frown, color: '#6C63FF' },
    { id: 'excited', name: 'Excited', icon: Zap, color: '#FF6B6B' },
    { id: 'relaxed', name: 'Relaxed', icon: Wind, color: '#4ECDC4' },
    { id: 'angry', name: 'Angry', icon: Flame, color: '#FF8C42' },
    { id: 'romantic', name: 'Romantic', icon: Heart, color: '#FF69B4' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {moods.map((mood) => (
        <button
          key={mood.id}
          onClick={() => onSelectMood(mood.id)}
          className="transform transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-xl p-6 text-center"
          style={{ backgroundColor: mood.color, boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)' }}
        >
          <mood.icon className="w-12 h-12 mx-auto mb-2 text-white" />
          <p className="font-semibold text-white text-lg">{mood.name}</p>
        </button>
      ))}
    </div>
  );
};

export default MoodSelector;
