/**
 * Auto-generated logo component: Pentagon Number 1 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PentagonNumber1OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PentagonNumber1OutlineLogo = React.forwardRef<SVGSVGElement, PentagonNumber1OutlineLogoProps>(
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
      <path d="M13.163 2.168l8.021 5.828c.694 .504 .984 1.397 .719 2.212l-3.064 9.43a1.978 1.978 0 0 1 -1.881 1.367h-9.916a1.978 1.978 0 0 1 -1.881 -1.367l-3.064 -9.43a1.978 1.978 0 0 1 .719 -2.212l8.021 -5.828a1.978 1.978 0 0 1 2.326 0" />
  <path d="M10 10l2 -2v8" />
    </svg>
  )
);

PentagonNumber1OutlineLogo.displayName = "PentagonNumber1OutlineLogo";

export const PentagonNumber1OutlineLogoMetadata = {
  id: "pentagon-number-1-outline",
  baseId: "pentagon-number-1-outline",
  variant: "default",
  name: "Pentagon Number 1 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PentagonNumber1OutlineLogo;
