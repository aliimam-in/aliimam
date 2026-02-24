/**
 * Auto-generated logo component: Pound Sterling (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PoundSterlingLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PoundSterlingLogo = React.forwardRef<SVGSVGElement, PoundSterlingLogoProps>(
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
      <path d="M18 7c0-5.333-8-5.333-8 0" />
  <path d="M10 7v14" />
  <path d="M6 21h12" />
  <path d="M6 13h10" />
    </svg>
  )
);

PoundSterlingLogo.displayName = "PoundSterlingLogo";

export const PoundSterlingLogoMetadata = {
  id: "pound-sterling",
  baseId: "pound-sterling",
  variant: "default",
  name: "Pound Sterling",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PoundSterlingLogo;
