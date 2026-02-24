/**
 * Auto-generated logo component: Circle Dot (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CircleDotLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CircleDotLogo = React.forwardRef<SVGSVGElement, CircleDotLogoProps>(
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
  <circle cx="12" cy="12" r="1" />
    </svg>
  )
);

CircleDotLogo.displayName = "CircleDotLogo";

export const CircleDotLogoMetadata = {
  id: "circle-dot",
  baseId: "circle-dot",
  variant: "default",
  name: "Circle Dot",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CircleDotLogo;
