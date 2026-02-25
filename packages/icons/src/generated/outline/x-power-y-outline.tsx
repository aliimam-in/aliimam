/**
 * Auto-generated logo component: X Power Y Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface XPowerYOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const XPowerYOutlineLogo = React.forwardRef<SVGSVGElement, XPowerYOutlineLogoProps>(
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
      <path d="M15 3l3 5.063" />
  <path d="M5 12l6 6" />
  <path d="M5 18l6 -6" />
  <path d="M21 3l-4.8 9" />
    </svg>
  )
);

XPowerYOutlineLogo.displayName = "XPowerYOutlineLogo";

export const XPowerYOutlineLogoMetadata = {
  id: "x-power-y-outline",
  baseId: "x-power-y-outline",
  variant: "default",
  name: "X Power Y Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default XPowerYOutlineLogo;
