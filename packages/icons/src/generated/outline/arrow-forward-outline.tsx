/**
 * Auto-generated logo component: Arrow Forward Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowForwardOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowForwardOutlineLogo = React.forwardRef<SVGSVGElement, ArrowForwardOutlineLogoProps>(
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
      <path d="M15 11l4 4l-4 4m4 -4h-11a4 4 0 0 1 0 -8h1" />
    </svg>
  )
);

ArrowForwardOutlineLogo.displayName = "ArrowForwardOutlineLogo";

export const ArrowForwardOutlineLogoMetadata = {
  id: "arrow-forward-outline",
  baseId: "arrow-forward-outline",
  variant: "default",
  name: "Arrow Forward Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowForwardOutlineLogo;
