/**
 * Auto-generated logo component: Circle Number 0 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleNumber0OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleNumber0OutlineLogo = React.forwardRef<SVGSVGElement, CircleNumber0OutlineLogoProps>(
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
  <path d="M10 10v4a2 2 0 1 0 4 0v-4a2 2 0 1 0 -4 0" />
    </svg>
  )
);

CircleNumber0OutlineLogo.displayName = "CircleNumber0OutlineLogo";

export const CircleNumber0OutlineLogoMetadata = {
  id: "circle-number-0-outline",
  baseId: "circle-number-0-outline",
  variant: "default",
  name: "Circle Number 0 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleNumber0OutlineLogo;
