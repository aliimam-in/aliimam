/**
 * Auto-generated logo component: Bookmark Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookmarkOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookmarkOffOutlineLogo = React.forwardRef<SVGSVGElement, BookmarkOffOutlineLogoProps>(
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
      <path d="M7.708 3.721a3.982 3.982 0 0 1 2.292 -.721h4a4 4 0 0 1 4 4v7m0 4v3l-6 -4l-6 4v-14c0 -.308 .035 -.609 .1 -.897" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BookmarkOffOutlineLogo.displayName = "BookmarkOffOutlineLogo";

export const BookmarkOffOutlineLogoMetadata = {
  id: "bookmark-off-outline",
  baseId: "bookmark-off-outline",
  variant: "default",
  name: "Bookmark Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookmarkOffOutlineLogo;
