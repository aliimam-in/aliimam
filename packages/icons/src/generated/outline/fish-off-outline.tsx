/**
 * Auto-generated logo component: Fish Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FishOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FishOffOutlineLogo = React.forwardRef<SVGSVGElement, FishOffOutlineLogoProps>(
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
      <path d="M16.69 7.44a6.973 6.973 0 0 0 -1.63 3.635" />
  <path d="M2 9.504c5.307 5.948 10.293 8.57 14.597 7.1m2.583 -1.449c.988 -.788 1.93 -1.836 2.82 -3.153c-3 -4.443 -6.596 -5.812 -10.564 -4.548m-2.764 1.266c-2.145 1.266 -4.378 3.215 -6.672 5.786" />
  <path d="M18 11v.01" />
  <path d="M11.153 11.169c-.287 .777 -.171 1.554 .347 2.331" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

FishOffOutlineLogo.displayName = "FishOffOutlineLogo";

export const FishOffOutlineLogoMetadata = {
  id: "fish-off-outline",
  baseId: "fish-off-outline",
  variant: "default",
  name: "Fish Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FishOffOutlineLogo;
