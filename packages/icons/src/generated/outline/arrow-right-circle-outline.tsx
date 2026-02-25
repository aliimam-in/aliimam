/**
 * Auto-generated logo component: Arrow Right Circle Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRightCircleOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRightCircleOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRightCircleOutlineLogoProps>(
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
      <path d="M18 15l3 -3l-3 -3" />
  <path d="M3 12a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
  <path d="M7 12h14" />
    </svg>
  )
);

ArrowRightCircleOutlineLogo.displayName = "ArrowRightCircleOutlineLogo";

export const ArrowRightCircleOutlineLogoMetadata = {
  id: "arrow-right-circle-outline",
  baseId: "arrow-right-circle-outline",
  variant: "default",
  name: "Arrow Right Circle Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRightCircleOutlineLogo;
