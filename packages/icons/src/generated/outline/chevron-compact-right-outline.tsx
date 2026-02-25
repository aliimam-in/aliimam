/**
 * Auto-generated logo component: Chevron Compact Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ChevronCompactRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ChevronCompactRightOutlineLogo = React.forwardRef<SVGSVGElement, ChevronCompactRightOutlineLogoProps>(
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
      <path d="M11 4l3 8l-3 8" />
    </svg>
  )
);

ChevronCompactRightOutlineLogo.displayName = "ChevronCompactRightOutlineLogo";

export const ChevronCompactRightOutlineLogoMetadata = {
  id: "chevron-compact-right-outline",
  baseId: "chevron-compact-right-outline",
  variant: "default",
  name: "Chevron Compact Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ChevronCompactRightOutlineLogo;
