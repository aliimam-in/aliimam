/**
 * Auto-generated logo component: Book Upload Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookUploadOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookUploadOutlineLogo = React.forwardRef<SVGSVGElement, BookUploadOutlineLogoProps>(
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
      <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />
  <path d="M11 16h-5a2 2 0 0 0 -2 2" />
  <path d="M15 16l3 -3l3 3" />
  <path d="M18 13v9" />
    </svg>
  )
);

BookUploadOutlineLogo.displayName = "BookUploadOutlineLogo";

export const BookUploadOutlineLogoMetadata = {
  id: "book-upload-outline",
  baseId: "book-upload-outline",
  variant: "default",
  name: "Book Upload Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookUploadOutlineLogo;
