/**
 * Auto-generated logo component: Stethoscope Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StethoscopeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StethoscopeOutlineLogo = React.forwardRef<SVGSVGElement, StethoscopeOutlineLogoProps>(
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
      <path d="M6 4h-1a2 2 0 0 0 -2 2v3.5a5.5 5.5 0 0 0 11 0v-3.5a2 2 0 0 0 -2 -2h-1" />
  <path d="M8 15a6 6 0 1 0 12 0v-3" />
  <path d="M11 3v2" />
  <path d="M6 3v2" />
  <path d="M18 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

StethoscopeOutlineLogo.displayName = "StethoscopeOutlineLogo";

export const StethoscopeOutlineLogoMetadata = {
  id: "stethoscope-outline",
  baseId: "stethoscope-outline",
  variant: "default",
  name: "Stethoscope Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StethoscopeOutlineLogo;
