/**
 * Auto-generated logo component: Motorbike Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface MotorbikeOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const MotorbikeOutlineLogo = React.forwardRef<SVGSVGElement, MotorbikeOutlineLogoProps>(
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
      <path d="M2 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M16 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M7.5 14h5l4 -4h-10.5m1.5 4l4 -4" />
  <path d="M13 6h2l1.5 3l2 4" />
    </svg>
  )
);

MotorbikeOutlineLogo.displayName = "MotorbikeOutlineLogo";

export const MotorbikeOutlineLogoMetadata = {
  id: "motorbike-outline",
  baseId: "motorbike-outline",
  variant: "default",
  name: "Motorbike Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default MotorbikeOutlineLogo;
