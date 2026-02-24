/**
 * Auto-generated logo component: Book Open (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookOpenLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookOpenLogo = React.forwardRef<SVGSVGElement, BookOpenLogoProps>(
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
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  )
);

BookOpenLogo.displayName = "BookOpenLogo";

export const BookOpenLogoMetadata = {
  id: "book-open",
  baseId: "book-open",
  variant: "default",
  name: "Book Open",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookOpenLogo;
