/**
 * Auto-generated logo component: Arrow Back Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBackOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBackOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBackOutlineLogoProps>(
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
      <path d="M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1" />
    </svg>
  )
);

ArrowBackOutlineLogo.displayName = "ArrowBackOutlineLogo";

export const ArrowBackOutlineLogoMetadata = {
  id: "arrow-back-outline",
  baseId: "arrow-back-outline",
  variant: "default",
  name: "Arrow Back Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBackOutlineLogo;
