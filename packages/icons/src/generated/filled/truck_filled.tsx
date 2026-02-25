/**
 * Auto-generated logo component: Truck (filled)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface TruckFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const TruckFilledLogo = React.forwardRef<SVGSVGElement, TruckFilledLogoProps>(
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
      <path d="M13 4a1 1 0 0 1 1 1h4a1 1 0 0 1 .783 .378l.074 .108l3 5l.055 .103l.04 .107l.029 .109l.016 .11l.003 .085v6a1 1 0 0 1 -1 1h-1.171a3.001 3.001 0 0 1 -5.658 0h-4.342a3.001 3.001 0 0 1 -5.658 0h-1.171a1 1 0 0 1 -1 -1v-11a2 2 0 0 1 2 -2zm-6 12a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m.434 -9h-3.434v3h5.234z" />
    </svg>
  )
);

TruckFilledLogo.displayName = "TruckFilledLogo";

export const TruckFilledLogoMetadata = {
  id: "truck_filled",
  baseId: "truck",
  variant: "filled",
  name: "Truck",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default TruckFilledLogo;
