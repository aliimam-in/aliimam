/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BookSearchProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BookSearch = React.forwardRef<SVGSVGElement, BookSearchProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg 
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...(strokeWidth !== undefined ? { strokeWidth } : {})}
      {...props}
    >
      <path d="M11 22H5.5a1 1 0 0 1 0-5h4.501" />
  <path d="m21 22-1.879-1.878" />
  <path d="M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8" />
  <circle cx="17" cy="18" r="3" />
    </svg>
  )
);
BookSearch.displayName = "BookSearch";
export const BookSearchMetadata = { 
  id: "book-search", 
  baseId: "book-search", 
  variant: "default", 
  name: "Book Search", 
  category: "book", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BookSearch;
