/**
 * Auto-generated logo component: Arrow Back Up Double Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBackUpDoubleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBackUpDoubleOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBackUpDoubleOutlineLogoProps>(
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
      <path d="M13 14l-4 -4l4 -4" />
  <path d="M8 14l-4 -4l4 -4" />
  <path d="M9 10h7a4 4 0 1 1 0 8h-1" />
    </svg>
  )
);

ArrowBackUpDoubleOutlineLogo.displayName = "ArrowBackUpDoubleOutlineLogo";

export const ArrowBackUpDoubleOutlineLogoMetadata = {
  id: "arrow-back-up-double-outline",
  baseId: "arrow-back-up-double-outline",
  variant: "default",
  name: "Arrow Back Up Double Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBackUpDoubleOutlineLogo;
