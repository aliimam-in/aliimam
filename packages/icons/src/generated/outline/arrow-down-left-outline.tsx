/**
 * Auto-generated logo component: Arrow Down Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowDownLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowDownLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowDownLeftOutlineLogoProps>(
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
      <path d="M17 7l-10 10" />
  <path d="M16 17l-9 0l0 -9" />
    </svg>
  )
);

ArrowDownLeftOutlineLogo.displayName = "ArrowDownLeftOutlineLogo";

export const ArrowDownLeftOutlineLogoMetadata = {
  id: "arrow-down-left-outline",
  baseId: "arrow-down-left-outline",
  variant: "default",
  name: "Arrow Down Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowDownLeftOutlineLogo;
