/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BookUp2Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BookUp2 = React.forwardRef<SVGSVGElement, BookUp2Props>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M12 13V7" />
  <path d="M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2" />
  <path d="m9 10 3-3 3 3" />
  <path d="m9 5 3-3 3 3" />
    </svg>
  )
);
BookUp2.displayName = "BookUp2";
export const BookUp2Metadata = { id: "book-up-2", baseId: "book-up-2", variant: "default", name: "Book Up 2", category: "book", tags: [], viewBox: "0 0 24 24" } as const;
export default BookUp2;
