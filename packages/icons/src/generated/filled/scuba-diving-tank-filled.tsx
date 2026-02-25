/**
 * Auto-generated logo component: Scuba Diving Tank Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScubaDivingTankFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScubaDivingTankFilledLogo = React.forwardRef<SVGSVGElement, ScubaDivingTankFilledLogoProps>(
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
      <path d="M17 17v2a3 3 0 0 1 -3 3h-4a3 3 0 0 1 -3 -3v-2z" />
  <path d="M8 2a2 2 0 0 1 1.732 1h1.15a1.496 1.496 0 0 1 2.236 0h1.882a1 1 0 0 1 0 2l-1.883 .001a2 2 0 0 1 -.115 .116v.983a5 5 0 0 1 3.998 4.9v4h-10v-4a5 5 0 0 1 4 -4.9v-.983a2 2 0 0 1 -.117 -.116h-1.151a2 2 0 1 1 -1.732 -3.001" />
    </svg>
  )
);

ScubaDivingTankFilledLogo.displayName = "ScubaDivingTankFilledLogo";

export const ScubaDivingTankFilledLogoMetadata = {
  id: "scuba-diving-tank-filled",
  baseId: "scuba-diving-tank-filled",
  variant: "default",
  name: "Scuba Diving Tank Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScubaDivingTankFilledLogo;
