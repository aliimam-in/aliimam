/**
 * Auto-generated logo component: Book Download Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookDownloadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookDownloadOutlineLogo = React.forwardRef<SVGSVGElement, BookDownloadOutlineLogoProps>(
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
      <path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />
  <path d="M13 16h-7a2 2 0 0 0 -2 2" />
  <path d="M15 19l3 3l3 -3" />
  <path d="M18 22v-9" />
    </svg>
  )
);

BookDownloadOutlineLogo.displayName = "BookDownloadOutlineLogo";

export const BookDownloadOutlineLogoMetadata = {
  id: "book-download-outline",
  baseId: "book-download-outline",
  variant: "default",
  name: "Book Download Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookDownloadOutlineLogo;
