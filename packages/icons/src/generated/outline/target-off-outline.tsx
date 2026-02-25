/**
 * Auto-generated logo component: Target Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TargetOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TargetOffOutlineLogo = React.forwardRef<SVGSVGElement, TargetOffOutlineLogoProps>(
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
      <path d="M11.286 11.3a1 1 0 0 0 1.41 1.419" />
  <path d="M8.44 8.49a5 5 0 0 0 7.098 7.044m1.377 -2.611a5 5 0 0 0 -5.846 -5.836" />
  <path d="M5.649 5.623a9 9 0 1 0 12.698 12.758m1.683 -2.313a9 9 0 0 0 -12.076 -12.11" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TargetOffOutlineLogo.displayName = "TargetOffOutlineLogo";

export const TargetOffOutlineLogoMetadata = {
  id: "target-off-outline",
  baseId: "target-off-outline",
  variant: "default",
  name: "Target Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TargetOffOutlineLogo;
