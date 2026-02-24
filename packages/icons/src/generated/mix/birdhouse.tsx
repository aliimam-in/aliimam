/**
 * Auto-generated logo component: Birdhouse (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BirdhouseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BirdhouseLogo = React.forwardRef<SVGSVGElement, BirdhouseLogoProps>(
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
      <path d="M12 18v4" />
  <path d="m17 18 1.956-11.468" />
  <path d="m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8" />
  <path d="M4 18h16" />
  <path d="M7 18 5.044 6.532" />
  <circle cx="12" cy="10" r="2" />
    </svg>
  )
);

BirdhouseLogo.displayName = "BirdhouseLogo";

export const BirdhouseLogoMetadata = {
  id: "birdhouse",
  baseId: "birdhouse",
  variant: "default",
  name: "Birdhouse",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BirdhouseLogo;
