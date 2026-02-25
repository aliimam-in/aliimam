/**
 * Auto-generated logo component: Circle Number 4 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleNumber4OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleNumber4OutlineLogo = React.forwardRef<SVGSVGElement, CircleNumber4OutlineLogoProps>(
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
  <path d="M10 8v3a1 1 0 0 0 1 1h3" />
  <path d="M14 8v8" />
    </svg>
  )
);

CircleNumber4OutlineLogo.displayName = "CircleNumber4OutlineLogo";

export const CircleNumber4OutlineLogoMetadata = {
  id: "circle-number-4-outline",
  baseId: "circle-number-4-outline",
  variant: "default",
  name: "Circle Number 4 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleNumber4OutlineLogo;
