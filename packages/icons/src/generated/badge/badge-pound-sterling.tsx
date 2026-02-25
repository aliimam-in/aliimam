/**
 * Auto-generated logo component: Badge Pound Sterling (default)
 * Category: badge
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BadgePoundSterlingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BadgePoundSterlingLogo = React.forwardRef<SVGSVGElement, BadgePoundSterlingLogoProps>(
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
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
  <path d="M8 12h4" />
  <path d="M10 16V9.5a2.5 2.5 0 0 1 5 0" />
  <path d="M8 16h7" />
    </svg>
  )
);

BadgePoundSterlingLogo.displayName = "BadgePoundSterlingLogo";

export const BadgePoundSterlingLogoMetadata = {
  id: "badge-pound-sterling",
  baseId: "badge-pound-sterling",
  variant: "default",
  name: "Badge Pound Sterling",
  category: "badge",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BadgePoundSterlingLogo;
