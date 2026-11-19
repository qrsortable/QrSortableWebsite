import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from '../contexts/LanguageContext';

interface StarRatingProps {
  rating: number;
  size?: number;
  showLabel?: boolean;
  count?: number;
  dark?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, size = 20, showLabel = false, count, dark = false }) => {
  const { t } = useTranslation();

  return (
    <div className="flex items-center space-x-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star 
            key={star} 
            size={size} 
            className={`${star <= Math.round(rating) ? 'text-[#FDB623] fill-current' : dark ? 'text-white/25' : 'text-gray-200'}`} 
          />
        ))}
      </div>
      {showLabel && (
        <span className={`ml-2 text-lg font-black ${dark ? 'text-white' : 'text-gray-900'}`}>
          {rating > 0 ? rating.toFixed(1) : t('product', 'newRating')}
          {count !== undefined && <span className={`font-bold ml-1 ${dark ? 'text-gray-300' : 'text-gray-600'}`}>({count})</span>}
        </span>
      )}
    </div>
  );
};
