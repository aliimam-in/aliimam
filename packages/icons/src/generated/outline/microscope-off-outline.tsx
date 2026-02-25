/**
 * Auto-generated logo component: Microscope Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MicroscopeOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MicroscopeOffOutlineLogo = React.forwardRef<SVGSVGElement, MicroscopeOffOutlineLogoProps>(
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
      <path d="M5 21h14" />
  <path d="M6 18h2" />
  <path d="M7 18v3" />
  <path d="M10 10l-1 1l3 3l1 -1m2 -2l3 -3l-3 -3l-3 3" />
  <path d="M10.5 12.5l-1.5 1.5" />
  <path d="M17 3l3 3" />
  <path d="M12 21a6 6 0 0 0 5.457 -3.505m.441 -3.599a6 6 0 0 0 -2.183 -3.608" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

MicroscopeOffOutlineLogo.displayName = "MicroscopeOffOutlineLogo";

export const MicroscopeOffOutlineLogoMetadata = {
  id: "microscope-off-outline",
  baseId: "microscope-off-outline",
  variant: "default",
  name: "Microscope Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MicroscopeOffOutlineLogo;
