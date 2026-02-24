/**
 * Auto-generated logo component: Book Alert (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookAlertLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookAlertLogo = React.forwardRef<SVGSVGElement, BookAlertLogoProps>(
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
      <path d="M12 13h.01" />
  <path d="M12 6v3" />
  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20" />
    </svg>
  )
);

BookAlertLogo.displayName = "BookAlertLogo";

export const BookAlertLogoMetadata = {
  id: "book-alert",
  baseId: "book-alert",
  variant: "default",
  name: "Book Alert",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookAlertLogo;
