/**
 * Auto-generated logo component: Tag (default)
 * Category: feather
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TagLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TagLogo = React.forwardRef<SVGSVGElement, TagLogoProps>(
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
      <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/>
    </svg>
  )
);

TagLogo.displayName = "TagLogo";

export const TagLogoMetadata = {
  id: "tag",
  baseId: "tag",
  variant: "default",
  name: "Tag",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TagLogo;
