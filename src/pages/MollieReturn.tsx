import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const MollieReturn: React.FC = () => {
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    // Mollie often uses 'id', but we'll check for 'paymentId' too as requested
    const paymentId = searchParams.get('id') || searchParams.get('paymentId');

    if (paymentId) {
      // Build the deeplink
      const deeplink = `myapp://payment-return?id=${encodeURIComponent(paymentId)}`;
      
      // Redirect immediately
      window.location.href = deeplink;

      // Optional: Auto-close or redirect to home after a delay if the app doesn't open
      const timeout = setTimeout(() => {
        console.log('App did not open, or user stayed on page.');
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [searchParams]);

  const paymentId = searchParams.get('id') || searchParams.get('paymentId');

  if (!paymentId) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 font-sans">
        <Helmet>
          <title>Payment Error - QrSortable</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div className="max-w-md w-full bg-white rounded-[2rem] p-8 shadow-xl text-center border-4 border-gray-100">
          <div className="text-red-500 mb-4 flex justify-center">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-black text-gray-900 mb-2">Missing Information</h1>
          <p className="text-gray-600 mb-6 font-medium">We couldn't find your payment details. Please return to the app and try again.</p>
          <a 
            href="/" 
            className="inline-block bg-[#FDB623] text-gray-900 font-black px-8 py-3 rounded-2xl hover:scale-105 transition-transform"
          >
            Go to Homepage
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDB623] p-4 font-sans">
      <Helmet>
        <title>Returning to App - QrSortable</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="max-w-md w-full bg-white rounded-[2rem] p-8 shadow-2xl text-center border-8 border-white animate-pulse">
        <h1 className="text-3xl font-black text-gray-900 mb-4 italic tracking-tight">QrSortable</h1>
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 border-4 border-[#FDB623] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-xl font-black text-gray-900">Returning to App...</p>
        <p className="text-gray-500 mt-2 font-medium">If the app doesn't open automatically, please check your notifications.</p>
        <div className="mt-8 pt-8 border-t border-gray-100">
           <a 
            href={`myapp://payment-return?id=${encodeURIComponent(paymentId)}`}
            className="text-gray-900 font-black underline decoration-4 decoration-[#FDB623] underline-offset-4"
          >
            Open manually
          </a>
        </div>
      </div>
    </div>
  );
};
