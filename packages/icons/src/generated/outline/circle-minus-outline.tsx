/**
 * Auto-generated logo component: Circle Minus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleMinusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleMinusOutlineLogo = React.forwardRef<SVGSVGElement, CircleMinusOutlineLogoProps>(
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
  <path d="M9 12l6 0" />
    </svg>
  )
);

CircleMinusOutlineLogo.displayName = "CircleMinusOutlineLogo";

export const CircleMinusOutlineLogoMetadata = {
  id: "circle-minus-outline",
  baseId: "circle-minus-outline",
  variant: "default",
  name: "Circle Minus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleMinusOutlineLogo;
