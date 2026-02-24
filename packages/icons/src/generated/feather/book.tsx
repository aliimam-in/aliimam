/**
 * Auto-generated logo component: Book (default)
 * Category: feather
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
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
    </svg>
  )
);

BookLogo.displayName = "BookLogo";

export const BookLogoMetadata = {
  id: "book",
  baseId: "book",
  variant: "default",
  name: "Book",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookLogo;
