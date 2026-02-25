/**
 * Auto-generated logo component: Ease In Out Control Points Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EaseInOutControlPointsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EaseInOutControlPointsOutlineLogo = React.forwardRef<SVGSVGElement, EaseInOutControlPointsOutlineLogoProps>(
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
      <path d="M17 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M17 20h-2" />
  <path d="M7 4a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
  <path d="M7 4h2" />
  <path d="M14 4h-2" />
  <path d="M12 20h-2" />
  <path d="M3 20c8 0 10 -16 18 -16" />
    </svg>
  )
);

EaseInOutControlPointsOutlineLogo.displayName = "EaseInOutControlPointsOutlineLogo";

export const EaseInOutControlPointsOutlineLogoMetadata = {
  id: "ease-in-out-control-points-outline",
  baseId: "ease-in-out-control-points-outline",
  variant: "default",
  name: "Ease In Out Control Points Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EaseInOutControlPointsOutlineLogo;
