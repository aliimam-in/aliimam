/**
 * Auto-generated logo component: Arrow Bar Both Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowBarBothOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowBarBothOutlineLogo = React.forwardRef<SVGSVGElement, ArrowBarBothOutlineLogoProps>(
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
      <path d="M8 12h-6" />
  <path d="M5 15l-3 -3l3 -3" />
  <path d="M22 12h-6" />
  <path d="M19 15l3 -3l-3 -3" />
  <path d="M12 4v16" />
    </svg>
  )
);

ArrowBarBothOutlineLogo.displayName = "ArrowBarBothOutlineLogo";

export const ArrowBarBothOutlineLogoMetadata = {
  id: "arrow-bar-both-outline",
  baseId: "arrow-bar-both-outline",
  variant: "default",
  name: "Arrow Bar Both Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowBarBothOutlineLogo;
