/**
 * Auto-generated logo component: Microscope Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MicroscopeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MicroscopeOutlineLogo = React.forwardRef<SVGSVGElement, MicroscopeOutlineLogoProps>(
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
  <path d="M9 11l3 3l6 -6l-3 -3l-6 6" />
  <path d="M10.5 12.5l-1.5 1.5" />
  <path d="M17 3l3 3" />
  <path d="M12 21a6 6 0 0 0 3.715 -10.712" />
    </svg>
  )
);

MicroscopeOutlineLogo.displayName = "MicroscopeOutlineLogo";

export const MicroscopeOutlineLogoMetadata = {
  id: "microscope-outline",
  baseId: "microscope-outline",
  variant: "default",
  name: "Microscope Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MicroscopeOutlineLogo;
