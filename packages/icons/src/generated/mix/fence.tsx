/**
 * Auto-generated logo component: Fence (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FenceLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FenceLogo = React.forwardRef<SVGSVGElement, FenceLogoProps>(
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
      <path d="M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
  <path d="M6 8h4" />
  <path d="M6 18h4" />
  <path d="m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
  <path d="M14 8h4" />
  <path d="M14 18h4" />
  <path d="m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z" />
    </svg>
  )
);

FenceLogo.displayName = "FenceLogo";

export const FenceLogoMetadata = {
  id: "fence",
  baseId: "fence",
  variant: "default",
  name: "Fence",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FenceLogo;
