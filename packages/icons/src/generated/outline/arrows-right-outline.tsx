/**
 * Auto-generated logo component: Arrows Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsRightOutlineLogoProps>(
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
  <path d="M18 4l3 3l-3 3" />
  <path d="M18 20l3 -3l-3 -3" />
  <path d="M21 7l-18 0" />
    </svg>
  )
);

ArrowsRightOutlineLogo.displayName = "ArrowsRightOutlineLogo";

export const ArrowsRightOutlineLogoMetadata = {
  id: "arrows-right-outline",
  baseId: "arrows-right-outline",
  variant: "default",
  name: "Arrows Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsRightOutlineLogo;
