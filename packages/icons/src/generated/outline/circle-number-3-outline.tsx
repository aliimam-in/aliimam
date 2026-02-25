/**
 * Auto-generated logo component: Circle Number 3 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleNumber3OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleNumber3OutlineLogo = React.forwardRef<SVGSVGElement, CircleNumber3OutlineLogoProps>(
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
  <path d="M10 9a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2h2a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1" />
    </svg>
  )
);

CircleNumber3OutlineLogo.displayName = "CircleNumber3OutlineLogo";

export const CircleNumber3OutlineLogoMetadata = {
  id: "circle-number-3-outline",
  baseId: "circle-number-3-outline",
  variant: "default",
  name: "Circle Number 3 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleNumber3OutlineLogo;
