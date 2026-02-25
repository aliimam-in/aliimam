/**
 * Auto-generated logo component: Barrel Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BarrelOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BarrelOutlineLogo = React.forwardRef<SVGSVGElement, BarrelOutlineLogoProps>(
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
      <path d="M7.278 4h9.444a2 2 0 0 1 1.841 1.22c.958 2.26 1.437 4.52 1.437 6.78c0 2.26 -.479 4.52 -1.437 6.78a2 2 0 0 1 -1.841 1.22h-9.444a2 2 0 0 1 -1.841 -1.22c-.958 -2.26 -1.437 -4.52 -1.437 -6.78c0 -2.26 .479 -4.52 1.437 -6.78a2 2 0 0 1 1.841 -1.22" />
  <path d="M14 4c.667 2.667 1 5.333 1 8s-.333 5.333 -1 8" />
  <path d="M10 4c-.667 2.667 -1 5.333 -1 8s.333 5.333 1 8" />
  <path d="M4.5 16h15" />
  <path d="M19.5 8h-15" />
    </svg>
  )
);

BarrelOutlineLogo.displayName = "BarrelOutlineLogo";

export const BarrelOutlineLogoMetadata = {
  id: "barrel-outline",
  baseId: "barrel-outline",
  variant: "default",
  name: "Barrel Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BarrelOutlineLogo;
