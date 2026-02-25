/**
 * Auto-generated logo component: Rubber Stamp Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface RubberStampOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const RubberStampOutlineLogo = React.forwardRef<SVGSVGElement, RubberStampOutlineLogoProps>(
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
      <path d="M21 17.85h-18c0 -4.05 1.421 -4.05 3.79 -4.05c5.21 0 1.21 -4.59 1.21 -6.8a4 4 0 1 1 8 0c0 2.21 -4 6.8 1.21 6.8c2.369 0 3.79 0 3.79 4.05" />
  <path d="M5 21h14" />
    </svg>
  )
);

RubberStampOutlineLogo.displayName = "RubberStampOutlineLogo";

export const RubberStampOutlineLogoMetadata = {
  id: "rubber-stamp-outline",
  baseId: "rubber-stamp-outline",
  variant: "default",
  name: "Rubber Stamp Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default RubberStampOutlineLogo;
