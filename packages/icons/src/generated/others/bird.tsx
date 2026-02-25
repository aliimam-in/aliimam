/**
 * Auto-generated logo component: Bird (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BirdLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BirdLogo = React.forwardRef<SVGSVGElement, BirdLogoProps>(
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
      <path d="M16 7h.01" />
  <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
  <path d="m20 7 2 .5-2 .5" />
  <path d="M10 18v3" />
  <path d="M14 17.75V21" />
  <path d="M7 18a6 6 0 0 0 3.84-10.61" />
    </svg>
  )
);

BirdLogo.displayName = "BirdLogo";

export const BirdLogoMetadata = {
  id: "bird",
  baseId: "bird",
  variant: "default",
  name: "Bird",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BirdLogo;
