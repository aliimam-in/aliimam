/**
 * Auto-generated logo component: Circle Half Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleHalfOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleHalfOutlineLogo = React.forwardRef<SVGSVGElement, CircleHalfOutlineLogoProps>(
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
  <path d="M12 3v18" />
    </svg>
  )
);

CircleHalfOutlineLogo.displayName = "CircleHalfOutlineLogo";

export const CircleHalfOutlineLogoMetadata = {
  id: "circle-half-outline",
  baseId: "circle-half-outline",
  variant: "default",
  name: "Circle Half Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleHalfOutlineLogo;
