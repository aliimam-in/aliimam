/**
 * Auto-generated logo component: Arrow Forward Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowForwardUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowForwardUpOutlineLogo = React.forwardRef<SVGSVGElement, ArrowForwardUpOutlineLogoProps>(
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
      <path d="M15 14l4 -4l-4 -4" />
  <path d="M19 10h-11a4 4 0 1 0 0 8h1" />
    </svg>
  )
);

ArrowForwardUpOutlineLogo.displayName = "ArrowForwardUpOutlineLogo";

export const ArrowForwardUpOutlineLogoMetadata = {
  id: "arrow-forward-up-outline",
  baseId: "arrow-forward-up-outline",
  variant: "default",
  name: "Arrow Forward Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowForwardUpOutlineLogo;
