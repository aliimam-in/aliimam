/**
 * Auto-generated logo component: Bell (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixBellLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixBellLogo = React.forwardRef<SVGSVGElement, MixBellLogoProps>(
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
  <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" />
    </svg>
  )
);

MixBellLogo.displayName = "MixBellLogo";

export const MixBellLogoMetadata = {
  id: "bell",
  baseId: "bell",
  variant: "default",
  name: "Bell",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixBellLogo;
