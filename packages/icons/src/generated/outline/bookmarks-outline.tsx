/**
 * Auto-generated logo component: Bookmarks Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookmarksOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookmarksOutlineLogo = React.forwardRef<SVGSVGElement, BookmarksOutlineLogoProps>(
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
      <path d="M15 10v11l-5 -3l-5 3v-11a3 3 0 0 1 3 -3h4a3 3 0 0 1 3 3" />
  <path d="M11 3h5a3 3 0 0 1 3 3v11" />
    </svg>
  )
);

BookmarksOutlineLogo.displayName = "BookmarksOutlineLogo";

export const BookmarksOutlineLogoMetadata = {
  id: "bookmarks-outline",
  baseId: "bookmarks-outline",
  variant: "default",
  name: "Bookmarks Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookmarksOutlineLogo;
