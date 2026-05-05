import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  size?: number;
  showLabel?: boolean;
  count?: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, size = 20, showLabel = false, count }) => {
  return (
    <div className="flex items-center space-x-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            size={size} 
            className={`${star <= Math.round(rating) ? 'text-[#FDB623] fill-current' : 'text-gray-200'}`} 
          />
        ))}
      </div>
      {showLabel && (
        <span className="ml-2 text-lg font-black text-gray-900">
          {rating > 0 ? rating.toFixed(1) : 'New'}
          {count !== undefined && <span className="text-gray-400 font-bold ml-1">({count})</span>}
        </span>
      )}
    </div>
  );
};
