/**
 * Auto-generated logo component: Arrow Back Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBackUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBackUpOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBackUpOutlineLogoProps>(
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
      <path d="M9 14l-4 -4l4 -4" />
  <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
    </svg>
  )
);

ArrowBackUpOutlineLogo.displayName = "ArrowBackUpOutlineLogo";

export const ArrowBackUpOutlineLogoMetadata = {
  id: "arrow-back-up-outline",
  baseId: "arrow-back-up-outline",
  variant: "default",
  name: "Arrow Back Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBackUpOutlineLogo;
