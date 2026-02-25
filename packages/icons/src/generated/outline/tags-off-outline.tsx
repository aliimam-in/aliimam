/**
 * Auto-generated logo component: Tags Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TagsOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TagsOffOutlineLogo = React.forwardRef<SVGSVGElement, TagsOffOutlineLogoProps>(
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
      <path d="M16.296 12.296l-5.71 -5.71" />
  <path d="M6 6h-1a2 2 0 0 0 -2 2v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.278 -3.278" />
  <path d="M18 19l.496 -.496" />
  <path d="M20.384 16.367a4.822 4.822 0 0 0 -.792 -5.775l-4.592 -4.592" />
  <path d="M7 10h-.01" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TagsOffOutlineLogo.displayName = "TagsOffOutlineLogo";

export const TagsOffOutlineLogoMetadata = {
  id: "tags-off-outline",
  baseId: "tags-off-outline",
  variant: "default",
  name: "Tags Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TagsOffOutlineLogo;
