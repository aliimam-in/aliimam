/**
 * Auto-generated logo component: Book Type (default)
 * Category: book
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookTypeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookTypeLogo = React.forwardRef<SVGSVGElement, BookTypeLogoProps>(
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
      <path d="M10 13h4" />
  <path d="M12 6v7" />
  <path d="M16 8V6H8v2" />
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </svg>
  )
);

BookTypeLogo.displayName = "BookTypeLogo";

export const BookTypeLogoMetadata = {
  id: "book-type",
  baseId: "book-type",
  variant: "default",
  name: "Book Type",
  category: "book",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookTypeLogo;
