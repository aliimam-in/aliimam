/**
 * Auto-generated logo component: Washing Machine (default)
 * Category: others
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface WashingMachineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const WashingMachineLogo = React.forwardRef<SVGSVGElement, WashingMachineLogoProps>(
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
      <path d="M3 6h3" />
  <path d="M17 6h.01" />
  <rect width="18" height="20" x="3" y="2" rx="2" />
  <circle cx="12" cy="13" r="5" />
  <path d="M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5" />
    </svg>
  )
);

WashingMachineLogo.displayName = "WashingMachineLogo";

export const WashingMachineLogoMetadata = {
  id: "washing-machine",
  baseId: "washing-machine",
  variant: "default",
  name: "Washing Machine",
  category: "others",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default WashingMachineLogo;
