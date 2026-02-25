/**
 * Auto-generated logo component: Diamond Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DiamondOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DiamondOffOutlineLogo = React.forwardRef<SVGSVGElement, DiamondOffOutlineLogoProps>(
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
      <path d="M9 5h9l3 5l-3.308 3.697m-1.883 2.104l-3.309 3.699a.7 .7 0 0 1 -1 0l-8.5 -9.5l2.62 -4.368" />
  <path d="M10 12l-2 -2.2l.6 -1" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

DiamondOffOutlineLogo.displayName = "DiamondOffOutlineLogo";

export const DiamondOffOutlineLogoMetadata = {
  id: "diamond-off-outline",
  baseId: "diamond-off-outline",
  variant: "default",
  name: "Diamond Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DiamondOffOutlineLogo;
