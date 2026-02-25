/**
 * Auto-generated logo component: Radar Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RadarOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RadarOutlineLogo = React.forwardRef<SVGSVGElement, RadarOutlineLogoProps>(
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
      <path d="M21 12h-8a1 1 0 1 0 -1 1v8a9 9 0 0 0 9 -9" />
  <path d="M16 9a5 5 0 1 0 -7 7" />
  <path d="M20.486 9a9 9 0 1 0 -11.482 11.495" />
    </svg>
  )
);

RadarOutlineLogo.displayName = "RadarOutlineLogo";

export const RadarOutlineLogoMetadata = {
  id: "radar-outline",
  baseId: "radar-outline",
  variant: "default",
  name: "Radar Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RadarOutlineLogo;
