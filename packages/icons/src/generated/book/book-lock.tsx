/**
 * Auto-generated logo component: Book Lock (default)
 * Category: book
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookLockLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookLockLogo = React.forwardRef<SVGSVGElement, BookLockLogoProps>(
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
      <path d="M18 6V4a2 2 0 1 0-4 0v2" />
  <path d="M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10" />
  <rect x="12" y="6" width="8" height="5" rx="1" />
    </svg>
  )
);

BookLockLogo.displayName = "BookLockLogo";

export const BookLockLogoMetadata = {
  id: "book-lock",
  baseId: "book-lock",
  variant: "default",
  name: "Book Lock",
  category: "book",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookLockLogo;
