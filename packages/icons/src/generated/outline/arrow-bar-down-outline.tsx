/**
 * Auto-generated logo component: Arrow Bar Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBarDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBarDownOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBarDownOutlineLogoProps>(
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
      <path d="M12 20l0 -10" />
  <path d="M12 20l4 -4" />
  <path d="M12 20l-4 -4" />
  <path d="M4 4l16 0" />
    </svg>
  )
);

ArrowBarDownOutlineLogo.displayName = "ArrowBarDownOutlineLogo";

export const ArrowBarDownOutlineLogoMetadata = {
  id: "arrow-bar-down-outline",
  baseId: "arrow-bar-down-outline",
  variant: "default",
  name: "Arrow Bar Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBarDownOutlineLogo;
