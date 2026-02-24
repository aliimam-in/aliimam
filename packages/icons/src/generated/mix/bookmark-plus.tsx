/**
 * Auto-generated logo component: Bookmark Plus (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BookmarkPlusLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BookmarkPlusLogo = React.forwardRef<SVGSVGElement, BookmarkPlusLogoProps>(
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
      <path d="M12 7v6" />
  <path d="M15 10H9" />
  <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
    </svg>
  )
);

BookmarkPlusLogo.displayName = "BookmarkPlusLogo";

export const BookmarkPlusLogoMetadata = {
  id: "bookmark-plus",
  baseId: "bookmark-plus",
  variant: "default",
  name: "Bookmark Plus",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BookmarkPlusLogo;
