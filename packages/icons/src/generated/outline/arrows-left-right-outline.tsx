/**
 * Auto-generated logo component: Arrows Left Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsLeftRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsLeftRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsLeftRightOutlineLogoProps>(
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
      <path d="M21 17l-18 0" />
  <path d="M6 10l-3 -3l3 -3" />
  <path d="M3 7l18 0" />
  <path d="M18 20l3 -3l-3 -3" />
    </svg>
  )
);

ArrowsLeftRightOutlineLogo.displayName = "ArrowsLeftRightOutlineLogo";

export const ArrowsLeftRightOutlineLogoMetadata = {
  id: "arrows-left-right-outline",
  baseId: "arrows-left-right-outline",
  variant: "default",
  name: "Arrows Left Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsLeftRightOutlineLogo;
