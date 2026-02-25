/**
 * Auto-generated logo component: Ease In Out Control Points Filled (default)
 * Category: filled
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface EaseInOutControlPointsFilledLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const EaseInOutControlPointsFilledLogo = React.forwardRef<SVGSVGElement, EaseInOutControlPointsFilledLogoProps>(
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
      <path d="M19 17a3 3 0 1 1 -2.829 4h-1.171a1 1 0 0 1 0 -2h1.17a3 3 0 0 1 2.83 -2m-14 -16c1.306 0 2.418 .835 2.83 2h1.17a1 1 0 1 1 0 2h-1.171a3.001 3.001 0 1 1 -2.829 -4m9 2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0 -2zm-2 16a1 1 0 0 1 0 2h-2a1 1 0 0 1 0 -2z" />
  <path d="M21 3a1 1 0 0 1 0 2c-2.83 0 -4.6 1.845 -8.152 7.53c-3.947 6.315 -6.012 8.47 -9.848 8.47a1 1 0 0 1 0 -2c2.83 0 4.6 -1.845 8.152 -7.53c3.947 -6.315 6.012 -8.47 9.848 -8.47" />
    </svg>
  )
);

EaseInOutControlPointsFilledLogo.displayName = "EaseInOutControlPointsFilledLogo";

export const EaseInOutControlPointsFilledLogoMetadata = {
  id: "ease-in-out-control-points-filled",
  baseId: "ease-in-out-control-points-filled",
  variant: "default",
  name: "Ease In Out Control Points Filled",
  category: "filled",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default EaseInOutControlPointsFilledLogo;
