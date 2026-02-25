/**
 * Auto-generated logo component: Arrow Bar Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBarUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBarUpOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBarUpOutlineLogoProps>(
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
      <path d="M12 4l0 10" />
  <path d="M12 4l4 4" />
  <path d="M12 4l-4 4" />
  <path d="M4 20l16 0" />
    </svg>
  )
);

ArrowBarUpOutlineLogo.displayName = "ArrowBarUpOutlineLogo";

export const ArrowBarUpOutlineLogoMetadata = {
  id: "arrow-bar-up-outline",
  baseId: "arrow-bar-up-outline",
  variant: "default",
  name: "Arrow Bar Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBarUpOutlineLogo;
