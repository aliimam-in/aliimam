/**
 * Auto-generated logo component: Book User (default)
 * Category: book
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookUserLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookUserLogo = React.forwardRef<SVGSVGElement, BookUserLogoProps>(
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
      <path d="M15 13a3 3 0 1 0-6 0" />
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
  <circle cx="12" cy="8" r="2" />
    </svg>
  )
);

BookUserLogo.displayName = "BookUserLogo";

export const BookUserLogoMetadata = {
  id: "book-user",
  baseId: "book-user",
  variant: "default",
  name: "Book User",
  category: "book",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookUserLogo;
