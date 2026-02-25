/**
 * Auto-generated logo component: Scuba Diving Tank Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScubaDivingTankOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScubaDivingTankOutlineLogo = React.forwardRef<SVGSVGElement, ScubaDivingTankOutlineLogoProps>(
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
      <path d="M8 11a4 4 0 1 1 8 0v5h-8l0 -5" />
  <path d="M8 16v3a2 2 0 0 0 2 2h4a2 2 0 0 0 2 -2v-3" />
  <path d="M9 4h6" />
  <path d="M12 7v-3" />
  <path d="M7 4a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11.5 4a.5 .5 0 1 0 1 0a.5 .5 0 1 0 -1 0" fill="currentColor" />
    </svg>
  )
);

ScubaDivingTankOutlineLogo.displayName = "ScubaDivingTankOutlineLogo";

export const ScubaDivingTankOutlineLogoMetadata = {
  id: "scuba-diving-tank-outline",
  baseId: "scuba-diving-tank-outline",
  variant: "default",
  name: "Scuba Diving Tank Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScubaDivingTankOutlineLogo;
