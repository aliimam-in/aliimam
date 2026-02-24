/**
 * Auto-generated logo component: Book Heart (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookHeartLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookHeartLogo = React.forwardRef<SVGSVGElement, BookHeartLogoProps>(
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
  <path d="M8.62 9.8A2.25 2.25 0 1 1 12 6.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" />
    </svg>
  )
);

BookHeartLogo.displayName = "BookHeartLogo";

export const BookHeartLogoMetadata = {
  id: "book-heart",
  baseId: "book-heart",
  variant: "default",
  name: "Book Heart",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookHeartLogo;
