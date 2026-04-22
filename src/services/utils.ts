import { Review } from '../types';

export const calculateAverageRating = (reviews: Review[] = []) => {
  if (reviews.length === 0) return 0;
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
  return parseFloat((sum / reviews.length).toFixed(1));
};

export const checkRateLimit = (key: string, limit: number, windowMs: number): boolean => {
  const now = Date.now();
  const timestamps = JSON.parse(localStorage.getItem(key) || '[]');
  const validTimestamps = timestamps.filter((t: number) => now - t < windowMs);
  
  if (validTimestamps.length >= limit) {
    return false;
  }
  
  return true;
};

export const recordSubmission = (key: string) => {
  const now = Date.now();
  const timestamps = JSON.parse(localStorage.getItem(key) || '[]');
  const validTimestamps = timestamps.filter((t: number) => now - t < 60000); // Keep last minute history
  localStorage.setItem(key, JSON.stringify([...validTimestamps, now]));
};

export const formatDate = (date: Date) =>
  date.toLocaleDateString('en-US');

export const sanitizeInput = (text: string): string => {
  return text.replace(/[<>]/g, '').slice(0, 1000).trim();
};

export const randomDateWithToday = () => {
  // 25% chance to be today
  if (Math.random() < 0.25) {
    return new Date();
  }

  const start = new Date();
  start.setFullYear(start.getFullYear() - 1);

  const end = new Date();

  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};
