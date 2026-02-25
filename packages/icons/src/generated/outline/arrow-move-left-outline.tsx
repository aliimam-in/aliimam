/**
 * Auto-generated logo component: Arrow Move Left Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowMoveLeftOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowMoveLeftOutlineLogo = React.forwardRef<SVGSVGElement, ArrowMoveLeftOutlineLogoProps>(
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
      <path d="M13 12h-10" />
  <path d="M6 15l-3 -3l3 -3" />
  <path d="M17 12a2 2 0 1 1 4 0a2 2 0 0 1 -4 0" />
    </svg>
  )
);

ArrowMoveLeftOutlineLogo.displayName = "ArrowMoveLeftOutlineLogo";

export const ArrowMoveLeftOutlineLogoMetadata = {
  id: "arrow-move-left-outline",
  baseId: "arrow-move-left-outline",
  variant: "default",
  name: "Arrow Move Left Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowMoveLeftOutlineLogo;
