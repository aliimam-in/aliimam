/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BookAProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BookA = React.forwardRef<SVGSVGElement, BookAProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
  <path d="m8 13 4-7 4 7" />
  <path d="M9.1 11h5.7" />
    </svg>
  )
);
BookA.displayName = "BookA";
export const BookAMetadata = { id: "book-a", baseId: "book-a", variant: "default", name: "Book A", category: "book", tags: [], viewBox: "0 0 24 24" } as const;
export default BookA;
