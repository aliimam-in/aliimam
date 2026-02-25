/**
 * Auto-generated logo component: Stethoscope Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface StethoscopeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const StethoscopeOffOutlineLogo = React.forwardRef<SVGSVGElement, StethoscopeOffOutlineLogoProps>(
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
      <path d="M4.172 4.179a2 2 0 0 0 -1.172 1.821v3.5a5.5 5.5 0 0 0 9.856 3.358m1.144 -2.858v-4a2 2 0 0 0 -2 -2h-1" />
  <path d="M8 15a6 6 0 0 0 10.714 3.712m1.216 -2.798c.046 -.3 .07 -.605 .07 -.914v-3" />
  <path d="M11 3v2" />
  <path d="M18 10a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

StethoscopeOffOutlineLogo.displayName = "StethoscopeOffOutlineLogo";

export const StethoscopeOffOutlineLogoMetadata = {
  id: "stethoscope-off-outline",
  baseId: "stethoscope-off-outline",
  variant: "default",
  name: "Stethoscope Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default StethoscopeOffOutlineLogo;
