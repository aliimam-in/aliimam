/**
 * Auto-generated logo component: Flag (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixFlagLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixFlagLogo = React.forwardRef<SVGSVGElement, MixFlagLogoProps>(
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
      <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
    </svg>
  )
);

MixFlagLogo.displayName = "MixFlagLogo";

export const MixFlagLogoMetadata = {
  id: "flag",
  baseId: "flag",
  variant: "default",
  name: "Flag",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixFlagLogo;
