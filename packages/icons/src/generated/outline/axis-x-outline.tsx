/**
 * Auto-generated logo component: Axis X Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface AxisXOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const AxisXOutlineLogo = React.forwardRef<SVGSVGElement, AxisXOutlineLogoProps>(
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
      <path d="M4 13v.01" />
  <path d="M4 9v.01" />
  <path d="M4 5v.01" />
  <path d="M17 20l3 -3l-3 -3" />
  <path d="M4 17h16" />
    </svg>
  )
);

AxisXOutlineLogo.displayName = "AxisXOutlineLogo";

export const AxisXOutlineLogoMetadata = {
  id: "axis-x-outline",
  baseId: "axis-x-outline",
  variant: "default",
  name: "Axis X Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default AxisXOutlineLogo;
