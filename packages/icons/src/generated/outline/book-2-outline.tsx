/**
 * Auto-generated logo component: Book 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface Book2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const Book2OutlineLogo = React.forwardRef<SVGSVGElement, Book2OutlineLogoProps>(
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
      <path d="M19 4v16h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12" />
  <path d="M19 16h-12a2 2 0 0 0 -2 2" />
  <path d="M9 8h6" />
    </svg>
  )
);

Book2OutlineLogo.displayName = "Book2OutlineLogo";

export const Book2OutlineLogoMetadata = {
  id: "book-2-outline",
  baseId: "book-2-outline",
  variant: "default",
  name: "Book 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default Book2OutlineLogo;
