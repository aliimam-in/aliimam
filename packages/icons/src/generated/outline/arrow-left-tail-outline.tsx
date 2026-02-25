/**
 * Auto-generated logo component: Arrow Left Tail Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowLeftTailOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowLeftTailOutlineLogo = React.forwardRef<SVGSVGElement, ArrowLeftTailOutlineLogoProps>(
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
      <path d="M18 12h-15" />
  <path d="M6 9l-3 3l3 3" />
  <path d="M21 9l-3 3l3 3" />
    </svg>
  )
);

ArrowLeftTailOutlineLogo.displayName = "ArrowLeftTailOutlineLogo";

export const ArrowLeftTailOutlineLogoMetadata = {
  id: "arrow-left-tail-outline",
  baseId: "arrow-left-tail-outline",
  variant: "default",
  name: "Arrow Left Tail Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowLeftTailOutlineLogo;
