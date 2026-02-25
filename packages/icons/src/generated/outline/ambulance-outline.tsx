/**
 * Auto-generated logo component: Ambulance Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AmbulanceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AmbulanceOutlineLogo = React.forwardRef<SVGSVGElement, AmbulanceOutlineLogoProps>(
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
      <path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
  <path d="M6 10h4m-2 -2v4" />
    </svg>
  )
);

AmbulanceOutlineLogo.displayName = "AmbulanceOutlineLogo";

export const AmbulanceOutlineLogoMetadata = {
  id: "ambulance-outline",
  baseId: "ambulance-outline",
  variant: "default",
  name: "Ambulance Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AmbulanceOutlineLogo;
