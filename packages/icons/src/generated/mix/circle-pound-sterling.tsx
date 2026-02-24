/**
 * Auto-generated logo component: Circle Pound Sterling (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CirclePoundSterlingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CirclePoundSterlingLogo = React.forwardRef<SVGSVGElement, CirclePoundSterlingLogoProps>(
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
  <path d="M10 16V9.5a1 1 0 0 1 5 0" />
  <path d="M8 12h4" />
  <path d="M8 16h7" />
    </svg>
  )
);

CirclePoundSterlingLogo.displayName = "CirclePoundSterlingLogo";

export const CirclePoundSterlingLogoMetadata = {
  id: "circle-pound-sterling",
  baseId: "circle-pound-sterling",
  variant: "default",
  name: "Circle Pound Sterling",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CirclePoundSterlingLogo;
