/**
 * Auto-generated logo component: Diamond Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DiamondOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DiamondOutlineLogo = React.forwardRef<SVGSVGElement, DiamondOutlineLogoProps>(
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
      <path d="M6 5h12l3 5l-8.5 9.5a.7 .7 0 0 1 -1 0l-8.5 -9.5l3 -5" />
  <path d="M10 12l-2 -2.2l.6 -1" />
    </svg>
  )
);

DiamondOutlineLogo.displayName = "DiamondOutlineLogo";

export const DiamondOutlineLogoMetadata = {
  id: "diamond-outline",
  baseId: "diamond-outline",
  variant: "default",
  name: "Diamond Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DiamondOutlineLogo;
