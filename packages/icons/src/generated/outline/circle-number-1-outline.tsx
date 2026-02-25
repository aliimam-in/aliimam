/**
 * Auto-generated logo component: Circle Number 1 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleNumber1OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleNumber1OutlineLogo = React.forwardRef<SVGSVGElement, CircleNumber1OutlineLogoProps>(
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
  <path d="M10 10l2 -2v8" />
    </svg>
  )
);

CircleNumber1OutlineLogo.displayName = "CircleNumber1OutlineLogo";

export const CircleNumber1OutlineLogoMetadata = {
  id: "circle-number-1-outline",
  baseId: "circle-number-1-outline",
  variant: "default",
  name: "Circle Number 1 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleNumber1OutlineLogo;
