/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BookDashedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BookDashed = React.forwardRef<SVGSVGElement, BookDashedProps>(
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
      <path d="M12 17h1.5" />
  <path d="M12 22h1.5" />
  <path d="M12 2h1.5" />
  <path d="M17.5 22H19a1 1 0 0 0 1-1" />
  <path d="M17.5 2H19a1 1 0 0 1 1 1v1.5" />
  <path d="M20 14v3h-2.5" />
  <path d="M20 8.5V10" />
  <path d="M4 10V8.5" />
  <path d="M4 19.5V14" />
  <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H8" />
  <path d="M8 22H6.5a1 1 0 0 1 0-5H8" />
    </svg>
  )
);
BookDashed.displayName = "BookDashed";
export const BookDashedMetadata = { 
  id: "book-dashed", 
  baseId: "book-dashed", 
  variant: "default", 
  name: "Book Dashed", 
  category: "book", 
  tags: [], 
  viewBox: "0 0 24 24" 
} as const;

export default BookDashed;
