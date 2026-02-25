/**
 * Auto-generated logo component: Brackets Angle Off Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BracketsAngleOffOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BracketsAngleOffOutlineLogo = React.forwardRef<SVGSVGElement, BracketsAngleOffOutlineLogoProps>(
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
      <path d="M8 4h.01" />
  <path d="M6.453 6.474l-3.453 5.526l5 8" />
  <path d="M16 4l5 8l-1.917 3.067" />
  <path d="M17.535 17.544l-1.535 2.456" />
  <path d="M3 3l18 18" />
    </svg>
  )
);

BracketsAngleOffOutlineLogo.displayName = "BracketsAngleOffOutlineLogo";

export const BracketsAngleOffOutlineLogoMetadata = {
  id: "brackets-angle-off-outline",
  baseId: "brackets-angle-off-outline",
  variant: "default",
  name: "Brackets Angle Off Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BracketsAngleOffOutlineLogo;
