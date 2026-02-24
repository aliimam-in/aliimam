/**
 * Auto-generated logo component: Bookmark (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookmarkLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookmarkLogo = React.forwardRef<SVGSVGElement, BookmarkLogoProps>(
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
      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
    </svg>
  )
);

BookmarkLogo.displayName = "BookmarkLogo";

export const BookmarkLogoMetadata = {
  id: "bookmark",
  baseId: "bookmark",
  variant: "default",
  name: "Bookmark",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookmarkLogo;
