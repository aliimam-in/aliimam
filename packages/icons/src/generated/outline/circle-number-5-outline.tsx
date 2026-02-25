/**
 * Auto-generated logo component: Circle Number 5 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleNumber5OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleNumber5OutlineLogo = React.forwardRef<SVGSVGElement, CircleNumber5OutlineLogoProps>(
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
  <path d="M10 15a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1h-3v-4h4" />
    </svg>
  )
);

CircleNumber5OutlineLogo.displayName = "CircleNumber5OutlineLogo";

export const CircleNumber5OutlineLogoMetadata = {
  id: "circle-number-5-outline",
  baseId: "circle-number-5-outline",
  variant: "default",
  name: "Circle Number 5 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleNumber5OutlineLogo;
