/**
 * Auto-generated logo component: Bell Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixBellOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixBellOffLogo = React.forwardRef<SVGSVGElement, MixBellOffLogoProps>(
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
      <path d="M10.268 21a2 2 0 0 0 3.464 0" />
  <path d="M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742" />
  <path d="m2 2 20 20" />
  <path d="M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05" />
    </svg>
  )
);

MixBellOffLogo.displayName = "MixBellOffLogo";

export const MixBellOffLogoMetadata = {
  id: "bell-off",
  baseId: "bell-off",
  variant: "default",
  name: "Bell Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixBellOffLogo;
