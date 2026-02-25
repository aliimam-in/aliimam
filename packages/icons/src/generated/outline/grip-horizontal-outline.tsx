/**
 * Auto-generated logo component: Grip Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface GripHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const GripHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, GripHorizontalOutlineLogoProps>(
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
      <path d="M4 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M4 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M11 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M18 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
  <path d="M18 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
    </svg>
  )
);

GripHorizontalOutlineLogo.displayName = "GripHorizontalOutlineLogo";

export const GripHorizontalOutlineLogoMetadata = {
  id: "grip-horizontal-outline",
  baseId: "grip-horizontal-outline",
  variant: "default",
  name: "Grip Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default GripHorizontalOutlineLogo;
