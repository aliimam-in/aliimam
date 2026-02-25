/**
 * Auto-generated logo component: Bookmark Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookmarkOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookmarkOutlineLogo = React.forwardRef<SVGSVGElement, BookmarkOutlineLogoProps>(
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
      <path d="M18 7v14l-6 -4l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4" />
    </svg>
  )
);

BookmarkOutlineLogo.displayName = "BookmarkOutlineLogo";

export const BookmarkOutlineLogoMetadata = {
  id: "bookmark-outline",
  baseId: "bookmark-outline",
  variant: "default",
  name: "Bookmark Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookmarkOutlineLogo;
