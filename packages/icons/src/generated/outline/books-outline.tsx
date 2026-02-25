/**
 * Auto-generated logo component: Books Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BooksOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BooksOutlineLogo = React.forwardRef<SVGSVGElement, BooksOutlineLogoProps>(
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
      <path d="M5 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14" />
  <path d="M9 5a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -14" />
  <path d="M5 8h4" />
  <path d="M9 16h4" />
  <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041" />
  <path d="M14 9l4 -1" />
  <path d="M16 16l3.923 -.98" />
    </svg>
  )
);

BooksOutlineLogo.displayName = "BooksOutlineLogo";

export const BooksOutlineLogoMetadata = {
  id: "books-outline",
  baseId: "books-outline",
  variant: "default",
  name: "Books Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BooksOutlineLogo;
