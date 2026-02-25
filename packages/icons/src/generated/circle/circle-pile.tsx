/**
 * Auto-generated logo component: Circle Pile (default)
 * Category: circle
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CirclePileLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CirclePileLogo = React.forwardRef<SVGSVGElement, CirclePileLogoProps>(
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
      <circle cx="12" cy="19" r="2" />
  <circle cx="12" cy="5" r="2" />
  <circle cx="16" cy="12" r="2" />
  <circle cx="20" cy="19" r="2" />
  <circle cx="4" cy="19" r="2" />
  <circle cx="8" cy="12" r="2" />
    </svg>
  )
);

CirclePileLogo.displayName = "CirclePileLogo";

export const CirclePileLogoMetadata = {
  id: "circle-pile",
  baseId: "circle-pile",
  variant: "default",
  name: "Circle Pile",
  category: "circle",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CirclePileLogo;
