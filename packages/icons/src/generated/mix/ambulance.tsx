/**
 * Auto-generated logo component: Ambulance (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AmbulanceLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AmbulanceLogo = React.forwardRef<SVGSVGElement, AmbulanceLogoProps>(
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
      <path d="M10 10H6" />
  <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
  <path
    d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14" />
  <path d="M8 8v4" />
  <path d="M9 18h6" />
  <circle cx="17" cy="18" r="2" />
  <circle cx="7" cy="18" r="2" />
    </svg>
  )
);

AmbulanceLogo.displayName = "AmbulanceLogo";

export const AmbulanceLogoMetadata = {
  id: "ambulance",
  baseId: "ambulance",
  variant: "default",
  name: "Ambulance",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AmbulanceLogo;
