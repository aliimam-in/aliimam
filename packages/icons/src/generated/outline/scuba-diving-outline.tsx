/**
 * Auto-generated logo component: Scuba Diving Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ScubaDivingOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ScubaDivingOutlineLogo = React.forwardRef<SVGSVGElement, ScubaDivingOutlineLogoProps>(
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
      <path d="M19 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
  <path d="M2 2l3 3l1.5 4l3.5 2l6 2l1 4l2.5 3" />
  <path d="M11 8l4.5 1.5" />
    </svg>
  )
);

ScubaDivingOutlineLogo.displayName = "ScubaDivingOutlineLogo";

export const ScubaDivingOutlineLogoMetadata = {
  id: "scuba-diving-outline",
  baseId: "scuba-diving-outline",
  variant: "default",
  name: "Scuba Diving Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ScubaDivingOutlineLogo;
