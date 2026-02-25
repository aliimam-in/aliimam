/**
 * Auto-generated logo component: Rings Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RingsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RingsOutlineLogo = React.forwardRef<SVGSVGElement, RingsOutlineLogoProps>(
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
      <path d="M4 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M14 17a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M7 15v-11" />
  <path d="M17 15v-11" />
  <path d="M3 4h18" />
    </svg>
  )
);

RingsOutlineLogo.displayName = "RingsOutlineLogo";

export const RingsOutlineLogoMetadata = {
  id: "rings-outline",
  baseId: "rings-outline",
  variant: "default",
  name: "Rings Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RingsOutlineLogo;
