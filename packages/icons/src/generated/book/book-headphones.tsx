/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BookHeadphonesProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BookHeadphones = React.forwardRef<SVGSVGElement, BookHeadphonesProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
  <path d="M8 12v-2a4 4 0 0 1 8 0v2" />
  <circle cx="15" cy="12" r="1" />
  <circle cx="9" cy="12" r="1" />
    </svg>
  )
);
BookHeadphones.displayName = "BookHeadphones";
export const BookHeadphonesMetadata = { id: "book-headphones", baseId: "book-headphones", variant: "default", name: "Book Headphones", category: "book", tags: [], viewBox: "0 0 24 24" } as const;
export default BookHeadphones;
