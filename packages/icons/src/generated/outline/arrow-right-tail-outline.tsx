/**
 * Auto-generated logo component: Arrow Right Tail Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowRightTailOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowRightTailOutlineLogo = React.forwardRef<SVGSVGElement, ArrowRightTailOutlineLogoProps>(
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
      <path d="M18 15l3 -3l-3 -3" />
  <path d="M3 15l3 -3l-3 -3" />
  <path d="M6 12l15 0" />
    </svg>
  )
);

ArrowRightTailOutlineLogo.displayName = "ArrowRightTailOutlineLogo";

export const ArrowRightTailOutlineLogoMetadata = {
  id: "arrow-right-tail-outline",
  baseId: "arrow-right-tail-outline",
  variant: "default",
  name: "Arrow Right Tail Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowRightTailOutlineLogo;
