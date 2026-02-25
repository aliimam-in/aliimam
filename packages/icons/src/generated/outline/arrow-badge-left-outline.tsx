/**
 * Auto-generated logo component: Arrow Badge Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBadgeLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBadgeLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBadgeLeftOutlineLogoProps>(
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
      <path d="M11 17h6l-4 -5l4 -5h-6l-4 5l4 5" />
    </svg>
  )
);

ArrowBadgeLeftOutlineLogo.displayName = "ArrowBadgeLeftOutlineLogo";

export const ArrowBadgeLeftOutlineLogoMetadata = {
  id: "arrow-badge-left-outline",
  baseId: "arrow-badge-left-outline",
  variant: "default",
  name: "Arrow Badge Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBadgeLeftOutlineLogo;
