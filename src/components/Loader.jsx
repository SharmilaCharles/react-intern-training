import React from 'react';

export const Spinner = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'h-4 w-4 border-2',
    md: 'h-8 w-8 border-3',
    lg: 'h-12 w-12 border-4',
  };

  return (
    <div className={`animate-spin rounded-full border-primary-600 border-t-transparent ${sizes[size]} ${className}`}></div>
  );
};

export const Skeleton = ({ className = '' }) => (
  <div className={`animate-pulse bg-slate-200 dark:bg-slate-800 rounded ${className}`}></div>
);

const Loader = ({ fullPage = false }) => {
  if (fullPage) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm z-50">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-8">
      <Spinner />
    </div>
  );
};

export default Loader;
