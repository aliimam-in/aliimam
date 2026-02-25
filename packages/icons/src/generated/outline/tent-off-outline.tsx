/**
 * Auto-generated logo component: Tent Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TentOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TentOffOutlineLogo = React.forwardRef<SVGSVGElement, TentOffOutlineLogoProps>(
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
      <path d="M11 14l4 6h5m-2.863 -6.868l-5.137 -9.132l-1.44 2.559m-1.44 2.563l-6.12 10.878h6l4 -6" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

TentOffOutlineLogo.displayName = "TentOffOutlineLogo";

export const TentOffOutlineLogoMetadata = {
  id: "tent-off-outline",
  baseId: "tent-off-outline",
  variant: "default",
  name: "Tent Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TentOffOutlineLogo;
