/**
 * Auto-generated logo component: Truck (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TruckLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TruckLogo = React.forwardRef<SVGSVGElement, TruckLogoProps>(
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
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
  <path d="M15 18H9" />
  <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
  <circle cx="17" cy="18" r="2" />
  <circle cx="7" cy="18" r="2" />
    </svg>
  )
);

TruckLogo.displayName = "TruckLogo";

export const TruckLogoMetadata = {
  id: "truck",
  baseId: "truck",
  variant: "default",
  name: "Truck",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TruckLogo;
