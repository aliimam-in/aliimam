/**
 * Auto-generated logo component: Dribbble (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixDribbbleLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixDribbbleLogo = React.forwardRef<SVGSVGElement, MixDribbbleLogoProps>(
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
  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
    </svg>
  )
);

MixDribbbleLogo.displayName = "MixDribbbleLogo";

export const MixDribbbleLogoMetadata = {
  id: "dribbble",
  baseId: "dribbble",
  variant: "default",
  name: "Dribbble",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixDribbbleLogo;
