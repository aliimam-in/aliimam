/**
 * Auto-generated logo component: Sum Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface SumOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const SumOffOutlineLogo = React.forwardRef<SVGSVGElement, SumOffOutlineLogoProps>(
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
      <path d="M18 18a1 1 0 0 1 -1 1h-11l6 -7m-3 -7h8a1 1 0 0 1 1 1v2" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

SumOffOutlineLogo.displayName = "SumOffOutlineLogo";

export const SumOffOutlineLogoMetadata = {
  id: "sum-off-outline",
  baseId: "sum-off-outline",
  variant: "default",
  name: "Sum Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default SumOffOutlineLogo;
