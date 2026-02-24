/**
 * Auto-generated logo component: Circle Divide (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleDivideLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleDivideLogo = React.forwardRef<SVGSVGElement, CircleDivideLogoProps>(
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
      <circle cx="12" cy="12" r="10" />
  <line x1="8" x2="16" y1="12" y2="12" />
  <line x1="12" x2="12" y1="16" y2="16" />
  <line x1="12" x2="12" y1="8" y2="8" />
    </svg>
  )
);

CircleDivideLogo.displayName = "CircleDivideLogo";

export const CircleDivideLogoMetadata = {
  id: "circle-divide",
  baseId: "circle-divide",
  variant: "default",
  name: "Circle Divide",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleDivideLogo;
