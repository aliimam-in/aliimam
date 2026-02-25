/**
 * Auto-generated logo component: Float Center Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface FloatCenterOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const FloatCenterOutlineLogo = React.forwardRef<SVGSVGElement, FloatCenterOutlineLogoProps>(
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
      <path d="M9 6a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1l0 -4" />
  <path d="M4 7l1 0" />
  <path d="M4 11l1 0" />
  <path d="M19 7l1 0" />
  <path d="M19 11l1 0" />
  <path d="M4 15l16 0" />
  <path d="M4 19l16 0" />
    </svg>
  )
);

FloatCenterOutlineLogo.displayName = "FloatCenterOutlineLogo";

export const FloatCenterOutlineLogoMetadata = {
  id: "float-center-outline",
  baseId: "float-center-outline",
  variant: "default",
  name: "Float Center Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default FloatCenterOutlineLogo;
