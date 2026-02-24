/**
 * Auto-generated logo component: Pause (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixPauseLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixPauseLogo = React.forwardRef<SVGSVGElement, MixPauseLogoProps>(
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
      <rect x="14" y="3" width="5" height="18" rx="1" />
  <rect x="5" y="3" width="5" height="18" rx="1" />
    </svg>
  )
);

MixPauseLogo.displayName = "MixPauseLogo";

export const MixPauseLogoMetadata = {
  id: "pause",
  baseId: "pause",
  variant: "default",
  name: "Pause",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixPauseLogo;
