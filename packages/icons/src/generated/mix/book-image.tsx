/**
 * Auto-generated logo component: Book Image (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookImageLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookImageLogo = React.forwardRef<SVGSVGElement, BookImageLogoProps>(
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
      <path d="m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17" />
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
  <circle cx="10" cy="8" r="2" />
    </svg>
  )
);

BookImageLogo.displayName = "BookImageLogo";

export const BookImageLogoMetadata = {
  id: "book-image",
  baseId: "book-image",
  variant: "default",
  name: "Book Image",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookImageLogo;
