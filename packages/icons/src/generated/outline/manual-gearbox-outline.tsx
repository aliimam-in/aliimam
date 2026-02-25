/**
 * Auto-generated logo component: Manual Gearbox Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ManualGearboxOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ManualGearboxOutlineLogo = React.forwardRef<SVGSVGElement, ManualGearboxOutlineLogoProps>(
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
      <path d="M3 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M17 6a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M3 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M10 18a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M5 8l0 8" />
  <path d="M12 8l0 8" />
  <path d="M19 8v2a2 2 0 0 1 -2 2h-12" />
    </svg>
  )
);

ManualGearboxOutlineLogo.displayName = "ManualGearboxOutlineLogo";

export const ManualGearboxOutlineLogoMetadata = {
  id: "manual-gearbox-outline",
  baseId: "manual-gearbox-outline",
  variant: "default",
  name: "Manual Gearbox Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ManualGearboxOutlineLogo;
