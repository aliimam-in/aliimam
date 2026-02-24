/**
 * Auto-generated logo component: Book Open Text (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookOpenTextLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookOpenTextLogo = React.forwardRef<SVGSVGElement, BookOpenTextLogoProps>(
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
      <path d="M12 7v14" />
  <path d="M16 12h2" />
  <path d="M16 8h2" />
  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
  <path d="M6 12h2" />
  <path d="M6 8h2" />
    </svg>
  )
);

BookOpenTextLogo.displayName = "BookOpenTextLogo";

export const BookOpenTextLogoMetadata = {
  id: "book-open-text",
  baseId: "book-open-text",
  variant: "default",
  name: "Book Open Text",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookOpenTextLogo;
