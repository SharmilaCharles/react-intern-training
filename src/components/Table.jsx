import React from 'react';
import { twMerge } from 'tailwind-merge';

const Table = ({ columns, data, loading, onRowClick, className }) => {
  if (loading) {
    return (
      <div className="w-full space-y-4 animate-pulse">
        <div className="h-10 bg-slate-100 dark:bg-slate-800 rounded"></div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-16 bg-slate-50 dark:bg-slate-900 rounded"></div>
        ))}
      </div>
    );
  }

  return (
    <div className={twMerge('overflow-x-auto', className)}>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-200 dark:border-slate-800">
            {columns.map((column, idx) => (
              <th
                key={idx}
                className="py-4 px-4 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
          {data.length > 0 ? (
            data.map((row, rowIdx) => (
              <tr
                key={rowIdx}
                onClick={() => onRowClick?.(row)}
                className={twMerge(
                  'hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors',
                  onRowClick && 'cursor-pointer'
                )}
              >
                {columns.map((column, colIdx) => (
                  <td key={colIdx} className="py-4 px-4 text-sm text-slate-700 dark:text-slate-300">
                    {column.render ? column.render(row) : row[column.accessor]}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="py-10 text-center text-slate-500 dark:text-slate-400"
              >
                No data found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
