/**
 * Auto-generated logo component: Globe Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GlobeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GlobeOffOutlineLogo = React.forwardRef<SVGSVGElement, GlobeOffOutlineLogoProps>(
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
      <path d="M7.353 7.355a4 4 0 0 0 5.29 5.293m2.007 -2.009a4 4 0 0 0 -5.3 -5.284" />
  <path d="M5.75 15a8.015 8.015 0 0 0 9.792 .557m2.02 -1.998a8.015 8.015 0 0 0 -2.562 -11.559" />
  <path d="M11 17v4" />
  <path d="M7 21h8" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

GlobeOffOutlineLogo.displayName = "GlobeOffOutlineLogo";

export const GlobeOffOutlineLogoMetadata = {
  id: "globe-off-outline",
  baseId: "globe-off-outline",
  variant: "default",
  name: "Globe Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GlobeOffOutlineLogo;
