/**
 * Auto-generated logo component: Bookmarks (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookmarksFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookmarksFilledLogo = React.forwardRef<SVGSVGElement, BookmarksFilledLogoProps>(
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
      <path d="M12 6a4 4 0 0 1 4 4v11a1 1 0 0 1 -1.514 .857l-4.486 -2.691l-4.486 2.691a1 1 0 0 1 -1.508 -.743l-.006 -.114v-11a4 4 0 0 1 4 -4h4z" />
  <path d="M16 2a4 4 0 0 1 4 4v11a1 1 0 0 1 -2 0v-11a2 2 0 0 0 -2 -2h-5a1 1 0 0 1 0 -2h5z" />
    </svg>
  )
);

BookmarksFilledLogo.displayName = "BookmarksFilledLogo";

export const BookmarksFilledLogoMetadata = {
  id: "bookmarks_filled",
  baseId: "bookmarks",
  variant: "filled",
  name: "Bookmarks",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookmarksFilledLogo;
