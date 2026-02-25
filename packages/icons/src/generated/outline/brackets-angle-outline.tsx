/**
 * Auto-generated logo component: Brackets Angle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface BracketsAngleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const BracketsAngleOutlineLogo = React.forwardRef<SVGSVGElement, BracketsAngleOutlineLogoProps>(
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
      <path d="M8 4l-5 8l5 8" />
  <path d="M16 4l5 8l-5 8" />
    </svg>
  )
);

BracketsAngleOutlineLogo.displayName = "BracketsAngleOutlineLogo";

export const BracketsAngleOutlineLogoMetadata = {
  id: "brackets-angle-outline",
  baseId: "brackets-angle-outline",
  variant: "default",
  name: "Brackets Angle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default BracketsAngleOutlineLogo;
