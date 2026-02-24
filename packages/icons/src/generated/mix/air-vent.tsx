/**
 * Auto-generated logo component: Air Vent (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AirVentLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AirVentLogo = React.forwardRef<SVGSVGElement, AirVentLogoProps>(
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
      <path d="M18 17.5a2.5 2.5 0 1 1-4 2.03V12" />
  <path d="M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
  <path d="M6 8h12" />
  <path d="M6.6 15.572A2 2 0 1 0 10 17v-5" />
    </svg>
  )
);

AirVentLogo.displayName = "AirVentLogo";

export const AirVentLogoMetadata = {
  id: "air-vent",
  baseId: "air-vent",
  variant: "default",
  name: "Air Vent",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AirVentLogo;
