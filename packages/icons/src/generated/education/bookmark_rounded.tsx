/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BookmarkRoundedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BookmarkRounded = React.forwardRef<SVGSVGElement, BookmarkRoundedProps>(
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
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 2.44V12.42C17 14.39 15.59 15.16 13.86 14.12L12.54 13.33C12.24 13.15 11.76 13.15 11.46 13.33L10.14 14.12C8.41 15.15 7 14.39 7 12.42V2.44"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"   strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 2.44V12.42C17 14.39 15.59 15.16 13.86 14.12L12.54 13.33C12.24 13.15 11.76 13.15 11.46 13.33L10.14 14.12C8.41 15.15 7 14.39 7 12.42V2.44"   strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
);
BookmarkRounded.displayName = "BookmarkRounded";
export const BookmarkRoundedMetadata = { 
  id: "bookmark_rounded", 
  baseId: "bookmark", 
  variant: "rounded", 
  name: "Bookmark", 
  category: "education", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BookmarkRounded;
