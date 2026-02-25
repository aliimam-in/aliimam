/**
 * Auto-generated logo component: Bookmark Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookmarkPlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookmarkPlusOutlineLogo = React.forwardRef<SVGSVGElement, BookmarkPlusOutlineLogoProps>(
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
      <path d="M12 17l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v5" />
  <path d="M16 19h6" />
  <path d="M19 16v6" />
    </svg>
  )
);

BookmarkPlusOutlineLogo.displayName = "BookmarkPlusOutlineLogo";

export const BookmarkPlusOutlineLogoMetadata = {
  id: "bookmark-plus-outline",
  baseId: "bookmark-plus-outline",
  variant: "default",
  name: "Bookmark Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookmarkPlusOutlineLogo;
