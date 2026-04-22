import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { Review } from '../types';
import { formatDate, randomDateWithToday } from '../services/utils';

const FEEDBACK_API_URL = 'https://script.google.com/macros/s/AKfycbzu_IJCUVFrCN324skNaxaUOChyAnsVTrhdsK6mxtF1BC3HTkp-y0Owm08MkYcQ1u6w/exec';

interface FeedbackContextType {
  allReviews: any[];
  isLoading: boolean;
  refreshFeedback: () => Promise<void>;
  addLocalReview: (review: Review, productName: string) => void;
}

const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const FeedbackProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [allReviews, setAllReviews] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchReviews = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(FEEDBACK_API_URL);
      const data = await response.json();
      setAllReviews(data || []);
    } catch (error) {
      console.error('Failed to load feedback:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const addLocalReview = (review: Review, productName: string) => {
    const apiStyleReview = {
      name: review.author,
      product: productName,
      rating: review.rating,
      comment: review.comment,
      date: review.date,
      id: review.id
    };
    setAllReviews(prev => [apiStyleReview, ...prev]);
  };

  return (
    <FeedbackContext.Provider value={{ allReviews, isLoading, refreshFeedback: fetchReviews, addLocalReview }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export const useFeedback = () => {
  const context = useContext(FeedbackContext);
  if (!context) throw new Error('useFeedback must be used within a FeedbackProvider');
  return context;
};

export const useProductFeedback = (productName: string) => {
  const { allReviews, isLoading } = useFeedback();

  const reviews = useMemo(() => {
    return allReviews
      .filter((r: any) => r.product === productName)
      .map((r: any) => ({
        id: r.id || Math.random().toString(36).substr(2, 9),
        author: r.name,
        rating: r.rating,
        comment: r.comment,
        date: formatDate(randomDateWithToday())
      }));
  }, [allReviews, productName]);

  return { reviews, isLoading };
};
