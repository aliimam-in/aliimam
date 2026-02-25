/**
 * Auto-generated logo component: Arrow Badge Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBadgeRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBadgeRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBadgeRightOutlineLogoProps>(
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
      <path d="M13 7h-6l4 5l-4 5h6l4 -5l-4 -5" />
    </svg>
  )
);

ArrowBadgeRightOutlineLogo.displayName = "ArrowBadgeRightOutlineLogo";

export const ArrowBadgeRightOutlineLogoMetadata = {
  id: "arrow-badge-right-outline",
  baseId: "arrow-badge-right-outline",
  variant: "default",
  name: "Arrow Badge Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBadgeRightOutlineLogo;
