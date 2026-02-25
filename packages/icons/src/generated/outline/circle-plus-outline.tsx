/**
 * Auto-generated logo component: Circle Plus Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface CirclePlusOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const CirclePlusOutlineLogo = React.forwardRef<SVGSVGElement, CirclePlusOutlineLogoProps>(
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
  <path d="M9 12h6" />
  <path d="M12 9v6" />
    </svg>
  )
);

CirclePlusOutlineLogo.displayName = "CirclePlusOutlineLogo";

export const CirclePlusOutlineLogoMetadata = {
  id: "circle-plus-outline",
  baseId: "circle-plus-outline",
  variant: "default",
  name: "Circle Plus Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default CirclePlusOutlineLogo;
