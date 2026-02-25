/**
 * Auto-generated logo component: Bookmarks Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookmarksOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookmarksOffOutlineLogo = React.forwardRef<SVGSVGElement, BookmarksOffOutlineLogoProps>(
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
      <path d="M11 7h2a2 2 0 0 1 2 2v2m0 4v6l-5 -3l-5 3v-12a2 2 0 0 1 2 -2" />
  <path d="M9.265 4a2 2 0 0 1 1.735 -1h6a2 2 0 0 1 2 2v10" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BookmarksOffOutlineLogo.displayName = "BookmarksOffOutlineLogo";

export const BookmarksOffOutlineLogoMetadata = {
  id: "bookmarks-off-outline",
  baseId: "bookmarks-off-outline",
  variant: "default",
  name: "Bookmarks Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookmarksOffOutlineLogo;
