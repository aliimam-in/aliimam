/**
 * Auto-generated logo component: Growth Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GrowthOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GrowthOutlineLogo = React.forwardRef<SVGSVGElement, GrowthOutlineLogoProps>(
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
      <path d="M16.5 15a4.5 4.5 0 0 0 -4.5 4.5m4.5 -8.5a4.5 4.5 0 0 0 -4.5 4.5m4.5 -8.5a4.5 4.5 0 0 0 -4.5 4.5m-4 3.5c2.21 0 4 2.015 4 4.5m-4 -8.5c2.21 0 4 2.015 4 4.5m-4 -8.5c2.21 0 4 2.015 4 4.5m0 -7.5v6" />
    </svg>
  )
);

GrowthOutlineLogo.displayName = "GrowthOutlineLogo";

export const GrowthOutlineLogoMetadata = {
  id: "growth-outline",
  baseId: "growth-outline",
  variant: "default",
  name: "Growth Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GrowthOutlineLogo;
