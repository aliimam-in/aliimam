/**
 * Auto-generated logo component: Circle Percentage Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CirclePercentageOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CirclePercentageOutlineLogo = React.forwardRef<SVGSVGElement, CirclePercentageOutlineLogoProps>(
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
      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
  <path d="M9 15.075l6 -6" />
  <path d="M9 9.105v.015" />
  <path d="M15 15.12v.015" />
    </svg>
  )
);

CirclePercentageOutlineLogo.displayName = "CirclePercentageOutlineLogo";

export const CirclePercentageOutlineLogoMetadata = {
  id: "circle-percentage-outline",
  baseId: "circle-percentage-outline",
  variant: "default",
  name: "Circle Percentage Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CirclePercentageOutlineLogo;
