/**
 * Auto-generated logo component: Truck (default)
 * Category: feather
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
      <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  )
);

TruckLogo.displayName = "TruckLogo";

export const TruckLogoMetadata = {
  id: "truck",
  baseId: "truck",
  variant: "default",
  name: "Truck",
  category: "feather",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TruckLogo;
