/**
 * Auto-generated logo component: Circle Pause (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CirclePauseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CirclePauseLogo = React.forwardRef<SVGSVGElement, CirclePauseLogoProps>(
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
  <line x1="10" x2="10" y1="15" y2="9" />
  <line x1="14" x2="14" y1="15" y2="9" />
    </svg>
  )
);

CirclePauseLogo.displayName = "CirclePauseLogo";

export const CirclePauseLogoMetadata = {
  id: "circle-pause",
  baseId: "circle-pause",
  variant: "default",
  name: "Circle Pause",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CirclePauseLogo;
