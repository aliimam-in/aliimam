/**
 * Auto-generated logo component: Dimensions Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface DimensionsOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const DimensionsOutlineLogo = React.forwardRef<SVGSVGElement, DimensionsOutlineLogoProps>(
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
      <path d="M3 5h11" />
  <path d="M12 7l2 -2l-2 -2" />
  <path d="M5 3l-2 2l2 2" />
  <path d="M19 10v11" />
  <path d="M17 19l2 2l2 -2" />
  <path d="M21 12l-2 -2l-2 2" />
  <path d="M3 12a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2l0 -7" />
    </svg>
  )
);

DimensionsOutlineLogo.displayName = "DimensionsOutlineLogo";

export const DimensionsOutlineLogoMetadata = {
  id: "dimensions-outline",
  baseId: "dimensions-outline",
  variant: "default",
  name: "Dimensions Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default DimensionsOutlineLogo;
