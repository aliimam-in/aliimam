/**
 * Auto-generated logo component: Arrow Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRightOutlineLogoProps>(
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
      <path d="M5 12l14 0" />
  <path d="M13 18l6 -6" />
  <path d="M13 6l6 6" />
    </svg>
  )
);

ArrowRightOutlineLogo.displayName = "ArrowRightOutlineLogo";

export const ArrowRightOutlineLogoMetadata = {
  id: "arrow-right-outline",
  baseId: "arrow-right-outline",
  variant: "default",
  name: "Arrow Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRightOutlineLogo;
