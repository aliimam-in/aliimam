/**
 * Auto-generated logo component: Chevron Compact Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronCompactDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronCompactDownOutlineLogo = React.forwardRef<SVGSVGElement, ChevronCompactDownOutlineLogoProps>(
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
      <path d="M4 11l8 3l8 -3" />
    </svg>
  )
);

ChevronCompactDownOutlineLogo.displayName = "ChevronCompactDownOutlineLogo";

export const ChevronCompactDownOutlineLogoMetadata = {
  id: "chevron-compact-down-outline",
  baseId: "chevron-compact-down-outline",
  variant: "default",
  name: "Chevron Compact Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronCompactDownOutlineLogo;
