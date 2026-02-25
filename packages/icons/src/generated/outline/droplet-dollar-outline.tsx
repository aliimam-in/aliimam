/**
 * Auto-generated logo component: Droplet Dollar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DropletDollarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DropletDollarOutlineLogo = React.forwardRef<SVGSVGElement, DropletDollarOutlineLogoProps>(
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
      <path d="M17.668 10.29l-4.493 -6.673c-.421 -.625 -1.288 -.803 -1.937 -.397a1.376 1.376 0 0 0 -.41 .397l-4.893 7.26c-1.695 2.838 -1.035 6.441 1.567 8.546a7.175 7.175 0 0 0 5.493 1.51" />
  <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
  <path d="M19 21v1m0 -8v1" />
    </svg>
  )
);

DropletDollarOutlineLogo.displayName = "DropletDollarOutlineLogo";

export const DropletDollarOutlineLogoMetadata = {
  id: "droplet-dollar-outline",
  baseId: "droplet-dollar-outline",
  variant: "default",
  name: "Droplet Dollar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DropletDollarOutlineLogo;
