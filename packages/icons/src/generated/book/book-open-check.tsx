/**
 * Auto-generated logo component: Book Open Check (default)
 * Category: book
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookOpenCheckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookOpenCheckLogo = React.forwardRef<SVGSVGElement, BookOpenCheckLogoProps>(
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
      <path d="M12 21V7" />
  <path d="m16 12 2 2 4-4" />
  <path d="M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3" />
    </svg>
  )
);

BookOpenCheckLogo.displayName = "BookOpenCheckLogo";

export const BookOpenCheckLogoMetadata = {
  id: "book-open-check",
  baseId: "book-open-check",
  variant: "default",
  name: "Book Open Check",
  category: "book",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookOpenCheckLogo;
