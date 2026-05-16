import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Card = ({ children, className, title, subtitle, icon: Icon, footer }) => {
  return (
    <div className={twMerge('card p-6 flex flex-col h-full', className)}>
      <div className="flex items-start justify-between mb-4">
        <div>
          {title && <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{title}</h3>}
          {subtitle && <p className="text-sm text-slate-500 dark:text-slate-400">{subtitle}</p>}
        </div>
        {Icon && (
          <div className="p-3 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-xl">
            <Icon size={24} />
          </div>
        )}
      </div>
      <div className="flex-1">
        {children}
      </div>
      {footer && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
