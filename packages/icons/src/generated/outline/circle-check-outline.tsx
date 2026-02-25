/**
 * Auto-generated logo component: Circle Check Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleCheckOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleCheckOutlineLogo = React.forwardRef<SVGSVGElement, CircleCheckOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M9 12l2 2l4 -4" />
    </svg>
  )
);

CircleCheckOutlineLogo.displayName = "CircleCheckOutlineLogo";

export const CircleCheckOutlineLogoMetadata = {
  id: "circle-check-outline",
  baseId: "circle-check-outline",
  variant: "default",
  name: "Circle Check Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleCheckOutlineLogo;
