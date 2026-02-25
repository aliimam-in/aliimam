/**
 * Auto-generated logo component: Tank Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TankOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TankOutlineLogo = React.forwardRef<SVGSVGElement, TankOutlineLogoProps>(
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
      <path d="M2 15a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3" />
  <path d="M6 12l1 -5h5l3 5" />
  <path d="M21 9l-7.8 0" />
    </svg>
  )
);

TankOutlineLogo.displayName = "TankOutlineLogo";

export const TankOutlineLogoMetadata = {
  id: "tank-outline",
  baseId: "tank-outline",
  variant: "default",
  name: "Tank Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TankOutlineLogo;
