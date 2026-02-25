/**
 * Auto-generated logo component: Arrow Badge Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBadgeDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBadgeDownOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBadgeDownOutlineLogoProps>(
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
      <path d="M17 13v-6l-5 4l-5 -4v6l5 4l5 -4" />
    </svg>
  )
);

ArrowBadgeDownOutlineLogo.displayName = "ArrowBadgeDownOutlineLogo";

export const ArrowBadgeDownOutlineLogoMetadata = {
  id: "arrow-badge-down-outline",
  baseId: "arrow-badge-down-outline",
  variant: "default",
  name: "Arrow Badge Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBadgeDownOutlineLogo;
