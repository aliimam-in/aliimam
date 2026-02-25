/**
 * Auto-generated logo component: Circle Minus 2 Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleMinus2OutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleMinus2OutlineLogo = React.forwardRef<SVGSVGElement, CircleMinus2OutlineLogoProps>(
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
      <path d="M20.475 15.029a9 9 0 1 0 -7.962 5.957" />
  <path d="M16 19h6" />
    </svg>
  )
);

CircleMinus2OutlineLogo.displayName = "CircleMinus2OutlineLogo";

export const CircleMinus2OutlineLogoMetadata = {
  id: "circle-minus-2-outline",
  baseId: "circle-minus-2-outline",
  variant: "default",
  name: "Circle Minus 2 Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleMinus2OutlineLogo;
