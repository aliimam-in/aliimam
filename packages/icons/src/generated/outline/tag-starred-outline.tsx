/**
 * Auto-generated logo component: Tag Starred Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TagStarredOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TagStarredOutlineLogo = React.forwardRef<SVGSVGElement, TagStarredOutlineLogoProps>(
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
      <path d="M6.5 7.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0l5.592 -5.592a2.41 2.41 0 0 0 0 -3.408l-7.71 -7.71a2 2 0 0 0 -1.414 -.586h-5.172a3 3 0 0 0 -3 3" />
  <path d="M12.5 13.847l-1.5 1.153l.532 -1.857l-1.532 -1.143h1.902l.598 -1.8l.598 1.8h1.902l-1.532 1.143l.532 1.857l-1.5 -1.153" />
    </svg>
  )
);

TagStarredOutlineLogo.displayName = "TagStarredOutlineLogo";

export const TagStarredOutlineLogoMetadata = {
  id: "tag-starred-outline",
  baseId: "tag-starred-outline",
  variant: "default",
  name: "Tag Starred Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TagStarredOutlineLogo;
