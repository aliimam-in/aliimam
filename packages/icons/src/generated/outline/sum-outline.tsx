/**
 * Auto-generated logo component: Sum Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SumOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SumOutlineLogo = React.forwardRef<SVGSVGElement, SumOutlineLogoProps>(
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
      <path d="M18 16v2a1 1 0 0 1 -1 1h-11l6 -7l-6 -7h11a1 1 0 0 1 1 1v2" />
    </svg>
  )
);

SumOutlineLogo.displayName = "SumOutlineLogo";

export const SumOutlineLogoMetadata = {
  id: "sum-outline",
  baseId: "sum-outline",
  variant: "default",
  name: "Sum Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SumOutlineLogo;
