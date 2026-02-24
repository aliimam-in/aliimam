/**
 * Auto-generated logo component: Book Check (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookCheckLogo = React.forwardRef<SVGSVGElement, BookCheckLogoProps>(
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
  <path d="m9 9.5 2 2 4-4" />
    </svg>
  )
);

BookCheckLogo.displayName = "BookCheckLogo";

export const BookCheckLogoMetadata = {
  id: "book-check",
  baseId: "book-check",
  variant: "default",
  name: "Book Check",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookCheckLogo;
