/**
 * Auto-generated logo component: Circle Number 7 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleNumber7OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleNumber7OutlineLogo = React.forwardRef<SVGSVGElement, CircleNumber7OutlineLogoProps>(
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
  <path d="M10 8h4l-2 8" />
    </svg>
  )
);

CircleNumber7OutlineLogo.displayName = "CircleNumber7OutlineLogo";

export const CircleNumber7OutlineLogoMetadata = {
  id: "circle-number-7-outline",
  baseId: "circle-number-7-outline",
  variant: "default",
  name: "Circle Number 7 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleNumber7OutlineLogo;
