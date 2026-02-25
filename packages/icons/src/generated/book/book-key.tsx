/** Auto-generated - Do not edit */
'use client';
import React from 'react';

export interface BookKeyProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number;
}

export const BookKey = React.forwardRef<SVGSVGElement, BookKeyProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" {...(strokeWidth !== undefined ? { strokeWidth } : {})} {...props}>
      <path d="M13 2H6.5A2.5 2.5 0 0 0 4 4.5v15" />
  <path d="M17 2v6" />
  <path d="M17 4h2" />
  <path d="M20 15.2V21a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
  <circle cx="17" cy="10" r="2" />
    </svg>
  )
);
BookKey.displayName = "BookKey";
export const BookKeyMetadata = { id: "book-key", baseId: "book-key", variant: "default", name: "Book Key", category: "book", tags: [], viewBox: "0 0 24 24" } as const;
export default BookKey;
