/**
 * Auto-generated logo component: Book Search (default)
 * Category: book
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookSearchLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookSearchLogo = React.forwardRef<SVGSVGElement, BookSearchLogoProps>(
  ({ size = 24, className = '', strokeWidth = 1, ...props }, ref) => (
    <svg
      ref={ref}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
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

BookSearchLogo.displayName = "BookSearchLogo";

export const BookSearchLogoMetadata = {
  id: "book-search",
  baseId: "book-search",
  variant: "default",
  name: "Book Search",
  category: "book",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookSearchLogo;
