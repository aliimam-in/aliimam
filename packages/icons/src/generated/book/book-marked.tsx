/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BookMarkedProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BookMarked = React.forwardRef<SVGSVGElement, BookMarkedProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M10 2v8l3-3 3 3V2" />
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </svg>
  )
);
BookMarked.displayName = "BookMarked";
export const BookMarkedMetadata = { id: "book-marked", baseId: "book-marked", variant: "default", name: "Book Marked", category: "book", tags: [], viewBox: "0 0 24 24" } as const;
export default BookMarked;
