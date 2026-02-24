/**
 * Auto-generated logo component: Sun (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MixSunLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MixSunLogo = React.forwardRef<SVGSVGElement, MixSunLogoProps>(
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
      <circle cx="12" cy="12" r="4" />
  <path d="M12 2v2" />
  <path d="M12 20v2" />
  <path d="m4.93 4.93 1.41 1.41" />
  <path d="m17.66 17.66 1.41 1.41" />
  <path d="M2 12h2" />
  <path d="M20 12h2" />
  <path d="m6.34 17.66-1.41 1.41" />
  <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
);

MixSunLogo.displayName = "MixSunLogo";

export const MixSunLogoMetadata = {
  id: "sun",
  baseId: "sun",
  variant: "default",
  name: "Sun",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MixSunLogo;
