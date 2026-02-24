/**
 * Auto-generated logo component: Ship Wheel (default)
 * Category: mix
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ShipWheelLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ShipWheelLogo = React.forwardRef<SVGSVGElement, ShipWheelLogoProps>(
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
      <circle cx="12" cy="12" r="8" />
  <path d="M12 2v7.5" />
  <path d="m19 5-5.23 5.23" />
  <path d="M22 12h-7.5" />
  <path d="m19 19-5.23-5.23" />
  <path d="M12 14.5V22" />
  <path d="M10.23 13.77 5 19" />
  <path d="M9.5 12H2" />
  <path d="M10.23 10.23 5 5" />
  <circle cx="12" cy="12" r="2.5" />
    </svg>
  )
);

ShipWheelLogo.displayName = "ShipWheelLogo";

export const ShipWheelLogoMetadata = {
  id: "ship-wheel",
  baseId: "ship-wheel",
  variant: "default",
  name: "Ship Wheel",
  category: "mix",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ShipWheelLogo;
