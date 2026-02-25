/**
 * Auto-generated logo component: Grain Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GrainOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GrainOutlineLogo = React.forwardRef<SVGSVGElement, GrainOutlineLogoProps>(
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
      <path d="M3.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M8.5 4.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M8.5 14.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M3.5 19.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M13.5 9.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M18.5 4.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M13.5 19.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M18.5 14.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

GrainOutlineLogo.displayName = "GrainOutlineLogo";

export const GrainOutlineLogoMetadata = {
  id: "grain-outline",
  baseId: "grain-outline",
  variant: "default",
  name: "Grain Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GrainOutlineLogo;
