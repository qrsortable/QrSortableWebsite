import React from 'react';
import { motion } from 'framer-motion';

export const BrandLogo: React.FC<{ size?: number }> = ({ size = 48 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="100" height="100" rx="16" fill="black" />
    <path d="M10 30V15C10 12.2386 12.2386 10 15 10H30" stroke="#FDB623" strokeWidth="6" strokeLinecap="round"/>
    <path d="M70 10H85C87.7614 10 90 12.2386 90 15V30" stroke="#FDB623" strokeWidth="6" strokeLinecap="round"/>
    <path d="M90 70V85C90 87.7614 87.7614 90 85 90H70" stroke="#FDB623" strokeWidth="6" strokeLinecap="round"/>
    <path d="M30 90H15C12.2386 90 10 87.7614 10 85V70" stroke="#FDB623" strokeWidth="6" strokeLinecap="round"/>
    <rect x="22" y="22" width="22" height="22" fill="white" />
    <motion.circle 
      cx="33" 
      cy="33" 
      fill="#FDB623"
      initial={{ r: 5 }}
      animate={{
        r: [5, 8, 5],
        opacity: [1, 0.5, 1]
      }}
      transition={{
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
    <rect x="56" y="22" width="22" height="22" fill="white" />
    <rect x="10" y="48" width="80" height="4" fill="#FDB623" rx="2" />
    <rect x="22" y="58" width="4" height="20" fill="white" />
    <rect x="28" y="58" width="8" height="20" fill="white" />
    <rect x="38" y="58" width="2" height="20" fill="white" />
    <rect x="42" y="58" width="6" height="20" fill="white" />
    <rect x="50" y="58" width="3" height="20" fill="white" />
    <rect x="55" y="58" width="7" height="20" fill="white" />
    <rect x="64" y="58" width="4" height="20" fill="white" />
    <rect x="70" y="58" width="8" height="20" fill="white" />
  </svg>
);
