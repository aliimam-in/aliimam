/**
 * Auto-generated logo component: Bell Electric (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BellElectricLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BellElectricLogo = React.forwardRef<SVGSVGElement, BellElectricLogoProps>(
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
      <path d="M18.518 17.347A7 7 0 0 1 14 19" />
  <path d="M18.8 4A11 11 0 0 1 20 9" />
  <path d="M9 9h.01" />
  <circle cx="20" cy="16" r="2" />
  <circle cx="9" cy="9" r="7" />
  <rect x="4" y="16" width="10" height="6" rx="2" />
    </svg>
  )
);

BellElectricLogo.displayName = "BellElectricLogo";

export const BellElectricLogoMetadata = {
  id: "bell-electric",
  baseId: "bell-electric",
  variant: "default",
  name: "Bell Electric",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BellElectricLogo;
