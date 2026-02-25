/**
 * Auto-generated logo component: Arrow Badge Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBadgeUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBadgeUpOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBadgeUpOutlineLogoProps>(
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
      <path d="M17 11v6l-5 -4l-5 4v-6l5 -4l5 4" />
    </svg>
  )
);

ArrowBadgeUpOutlineLogo.displayName = "ArrowBadgeUpOutlineLogo";

export const ArrowBadgeUpOutlineLogoMetadata = {
  id: "arrow-badge-up-outline",
  baseId: "arrow-badge-up-outline",
  variant: "default",
  name: "Arrow Badge Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBadgeUpOutlineLogo;
