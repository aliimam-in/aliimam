/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BookmarkCheckProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BookmarkCheck = React.forwardRef<SVGSVGElement, BookmarkCheckProps>(
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
      <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
  <path d="m9 10 2 2 4-4" />
    </svg>
  )
);
BookmarkCheck.displayName = "BookmarkCheck";
export const BookmarkCheckMetadata = { 
  id: "bookmark-check", 
  baseId: "bookmark-check", 
  variant: "default", 
  name: "Bookmark Check", 
  category: "book", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BookmarkCheck;
