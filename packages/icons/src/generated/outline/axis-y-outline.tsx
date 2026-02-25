/**
 * Auto-generated logo component: Axis Y Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AxisYOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AxisYOutlineLogo = React.forwardRef<SVGSVGElement, AxisYOutlineLogoProps>(
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
      <path d="M11 20h-.01" />
  <path d="M15 20h-.01" />
  <path d="M19 20h-.01" />
  <path d="M4 7l3 -3l3 3" />
  <path d="M7 20v-16" />
    </svg>
  )
);

AxisYOutlineLogo.displayName = "AxisYOutlineLogo";

export const AxisYOutlineLogoMetadata = {
  id: "axis-y-outline",
  baseId: "axis-y-outline",
  variant: "default",
  name: "Axis Y Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AxisYOutlineLogo;
