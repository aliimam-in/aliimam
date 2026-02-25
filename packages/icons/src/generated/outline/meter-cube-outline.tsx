/**
 * Auto-generated logo component: Meter Cube Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MeterCubeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MeterCubeOutlineLogo = React.forwardRef<SVGSVGElement, MeterCubeOutlineLogoProps>(
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
      <path d="M17 5h1.5a1.5 1.5 0 0 1 0 3h-.5h.5a1.5 1.5 0 0 1 0 3h-1.5" />
  <path d="M4 12v6" />
  <path d="M4 14a2 2 0 0 1 2 -2h.5a2.5 2.5 0 0 1 2.5 2.5v3.5" />
  <path d="M9 15.5v-1a2.5 2.5 0 1 1 5 0v3.5" />
    </svg>
  )
);

MeterCubeOutlineLogo.displayName = "MeterCubeOutlineLogo";

export const MeterCubeOutlineLogoMetadata = {
  id: "meter-cube-outline",
  baseId: "meter-cube-outline",
  variant: "default",
  name: "Meter Cube Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MeterCubeOutlineLogo;
