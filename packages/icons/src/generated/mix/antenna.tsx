/**
 * Auto-generated logo component: Antenna (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AntennaLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AntennaLogo = React.forwardRef<SVGSVGElement, AntennaLogoProps>(
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
      <path d="M2 12 7 2" />
  <path d="m7 12 5-10" />
  <path d="m12 12 5-10" />
  <path d="m17 12 5-10" />
  <path d="M4.5 7h15" />
  <path d="M12 16v6" />
    </svg>
  )
);

AntennaLogo.displayName = "AntennaLogo";

export const AntennaLogoMetadata = {
  id: "antenna",
  baseId: "antenna",
  variant: "default",
  name: "Antenna",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AntennaLogo;
