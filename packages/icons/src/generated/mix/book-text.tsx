/**
 * Auto-generated logo component: Book Text (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookTextLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookTextLogo = React.forwardRef<SVGSVGElement, BookTextLogoProps>(
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
  <path d="M8 11h8" />
  <path d="M8 7h6" />
    </svg>
  )
);

BookTextLogo.displayName = "BookTextLogo";

export const BookTextLogoMetadata = {
  id: "book-text",
  baseId: "book-text",
  variant: "default",
  name: "Book Text",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookTextLogo;
