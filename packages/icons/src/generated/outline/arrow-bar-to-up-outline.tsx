/**
 * Auto-generated logo component: Arrow Bar To Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBarToUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBarToUpOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBarToUpOutlineLogoProps>(
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
      <path d="M12 10l0 10" />
  <path d="M12 10l4 4" />
  <path d="M12 10l-4 4" />
  <path d="M4 4l16 0" />
    </svg>
  )
);

ArrowBarToUpOutlineLogo.displayName = "ArrowBarToUpOutlineLogo";

export const ArrowBarToUpOutlineLogoMetadata = {
  id: "arrow-bar-to-up-outline",
  baseId: "arrow-bar-to-up-outline",
  variant: "default",
  name: "Arrow Bar To Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBarToUpOutlineLogo;
