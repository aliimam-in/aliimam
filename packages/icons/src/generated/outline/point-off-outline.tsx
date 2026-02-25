/**
 * Auto-generated logo component: Point Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface PointOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const PointOffOutlineLogo = React.forwardRef<SVGSVGElement, PointOffOutlineLogoProps>(
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
      <path d="M9.15 9.194a4 4 0 0 0 5.697 5.617m1.153 -2.811a4 4 0 0 0 -4 -4" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

PointOffOutlineLogo.displayName = "PointOffOutlineLogo";

export const PointOffOutlineLogoMetadata = {
  id: "point-off-outline",
  baseId: "point-off-outline",
  variant: "default",
  name: "Point Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default PointOffOutlineLogo;
