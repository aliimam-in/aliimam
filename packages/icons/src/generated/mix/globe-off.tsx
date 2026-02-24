/**
 * Auto-generated logo component: Globe Off (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GlobeOffLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GlobeOffLogo = React.forwardRef<SVGSVGElement, GlobeOffLogoProps>(
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
      <path d="M10.114 4.462A14.5 14.5 0 0 1 12 2a10 10 0 0 1 9.313 13.643" />
  <path d="M15.557 15.556A14.5 14.5 0 0 1 12 22 10 10 0 0 1 4.929 4.929" />
  <path d="M15.892 10.234A14.5 14.5 0 0 0 12 2a10 10 0 0 0-3.643.687" />
  <path d="M17.656 12H22" />
  <path d="M19.071 19.071A10 10 0 0 1 12 22 14.5 14.5 0 0 1 8.44 8.45" />
  <path d="M2 12h10" />
  <path d="m2 2 20 20" />
    </svg>
  )
);

GlobeOffLogo.displayName = "GlobeOffLogo";

export const GlobeOffLogoMetadata = {
  id: "globe-off",
  baseId: "globe-off",
  variant: "default",
  name: "Globe Off",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GlobeOffLogo;
