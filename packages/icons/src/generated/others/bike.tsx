/**
 * Auto-generated logo component: Bike (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BikeLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BikeLogo = React.forwardRef<SVGSVGElement, BikeLogoProps>(
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
      <circle cx="18.5" cy="17.5" r="3.5" />
  <circle cx="5.5" cy="17.5" r="3.5" />
  <circle cx="15" cy="5" r="1" />
  <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  )
);

BikeLogo.displayName = "BikeLogo";

export const BikeLogoMetadata = {
  id: "bike",
  baseId: "bike",
  variant: "default",
  name: "Bike",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BikeLogo;
