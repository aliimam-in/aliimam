/**
 * Auto-generated logo component: Book (default)
 * Category: book
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookLogo = React.forwardRef<SVGSVGElement, BookLogoProps>(
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </svg>
  )
);

BookLogo.displayName = "BookLogo";

export const BookLogoMetadata = {
  id: "book",
  baseId: "book",
  variant: "default",
  name: "Book",
  category: "book",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookLogo;
