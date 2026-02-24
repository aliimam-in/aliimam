/**
 * Auto-generated logo component: Target (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixTargetLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixTargetLogo = React.forwardRef<SVGSVGElement, MixTargetLogoProps>(
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
  <circle cx="12" cy="12" r="6" />
  <circle cx="12" cy="12" r="2" />
    </svg>
  )
);

MixTargetLogo.displayName = "MixTargetLogo";

export const MixTargetLogoMetadata = {
  id: "target",
  baseId: "target",
  variant: "default",
  name: "Target",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixTargetLogo;
