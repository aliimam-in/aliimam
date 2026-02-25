/**
 * Auto-generated logo component: Globe Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GlobeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GlobeOutlineLogo = React.forwardRef<SVGSVGElement, GlobeOutlineLogoProps>(
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
      <path d="M7 9a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
  <path d="M5.75 15a8.015 8.015 0 1 0 9.25 -13" />
  <path d="M11 17v4" />
  <path d="M7 21h8" />
    </svg>
  )
);

GlobeOutlineLogo.displayName = "GlobeOutlineLogo";

export const GlobeOutlineLogoMetadata = {
  id: "globe-outline",
  baseId: "globe-outline",
  variant: "default",
  name: "Globe Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GlobeOutlineLogo;
