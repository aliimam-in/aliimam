/**
 * Auto-generated logo component: Building Bank Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BuildingBankOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BuildingBankOutlineLogo = React.forwardRef<SVGSVGElement, BuildingBankOutlineLogoProps>(
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
      <path d="M3 21l18 0" />
  <path d="M3 10l18 0" />
  <path d="M5 6l7 -3l7 3" />
  <path d="M4 10l0 11" />
  <path d="M20 10l0 11" />
  <path d="M8 14l0 3" />
  <path d="M12 14l0 3" />
  <path d="M16 14l0 3" />
    </svg>
  )
);

BuildingBankOutlineLogo.displayName = "BuildingBankOutlineLogo";

export const BuildingBankOutlineLogoMetadata = {
  id: "building-bank-outline",
  baseId: "building-bank-outline",
  variant: "default",
  name: "Building Bank Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BuildingBankOutlineLogo;
