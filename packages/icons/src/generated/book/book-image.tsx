/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BookImageProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BookImage = React.forwardRef<SVGSVGElement, BookImageProps>(
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
      <path d="m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" />
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
  <circle cx="10" cy="8" r="2" />
    </svg>
  )
);
BookImage.displayName = "BookImage";
export const BookImageMetadata = { 
  id: "book-image", 
  baseId: "book-image", 
  variant: "default", 
  name: "Book Image", 
  category: "book", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BookImage;
