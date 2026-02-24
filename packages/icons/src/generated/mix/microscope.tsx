/**
 * Auto-generated logo component: Microscope (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MicroscopeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MicroscopeLogo = React.forwardRef<SVGSVGElement, MicroscopeLogoProps>(
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
      <path d="M6 18h8" />
  <path d="M3 22h18" />
  <path d="M14 22a7 7 0 1 0 0-14h-1" />
  <path d="M9 14h2" />
  <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
  <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
);

MicroscopeLogo.displayName = "MicroscopeLogo";

export const MicroscopeLogoMetadata = {
  id: "microscope",
  baseId: "microscope",
  variant: "default",
  name: "Microscope",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MicroscopeLogo;
