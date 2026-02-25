/**
 * Auto-generated logo component: Arrow Bounce Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBounceOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBounceOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBounceOutlineLogoProps>(
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
      <path d="M10 18h4" />
  <path d="M3 8a9 9 0 0 1 9 9v1l1.428 -4.285a12 12 0 0 1 6.018 -6.938l.554 -.277" />
  <path d="M15 6h5v5" />
    </svg>
  )
);

ArrowBounceOutlineLogo.displayName = "ArrowBounceOutlineLogo";

export const ArrowBounceOutlineLogoMetadata = {
  id: "arrow-bounce-outline",
  baseId: "arrow-bounce-outline",
  variant: "default",
  name: "Arrow Bounce Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBounceOutlineLogo;
