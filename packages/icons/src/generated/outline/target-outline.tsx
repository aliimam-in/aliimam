/**
 * Auto-generated logo component: Target Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TargetOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TargetOutlineLogo = React.forwardRef<SVGSVGElement, TargetOutlineLogoProps>(
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
      <path d="M11 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0" />
  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
    </svg>
  )
);

TargetOutlineLogo.displayName = "TargetOutlineLogo";

export const TargetOutlineLogoMetadata = {
  id: "target-outline",
  baseId: "target-outline",
  variant: "default",
  name: "Target Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TargetOutlineLogo;
