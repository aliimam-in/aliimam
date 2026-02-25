/**
 * Auto-generated logo component: Book Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookOffOutlineLogo = React.forwardRef<SVGSVGElement, BookOffOutlineLogoProps>(
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
      <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096" />
  <path d="M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0" />
  <path d="M3 6v13" />
  <path d="M12 6v2m0 4v7" />
  <path d="M21 6v11" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BookOffOutlineLogo.displayName = "BookOffOutlineLogo";

export const BookOffOutlineLogoMetadata = {
  id: "book-off-outline",
  baseId: "book-off-outline",
  variant: "default",
  name: "Book Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookOffOutlineLogo;
