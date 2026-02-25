/**
 * Auto-generated logo component: Arrows Move Horizontal Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowsMoveHorizontalOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowsMoveHorizontalOutlineLogo = React.forwardRef<SVGSVGElement, ArrowsMoveHorizontalOutlineLogoProps>(
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
      <path d="M18 9l3 3l-3 3" />
  <path d="M15 12h6" />
  <path d="M6 9l-3 3l3 3" />
  <path d="M3 12h6" />
    </svg>
  )
);

ArrowsMoveHorizontalOutlineLogo.displayName = "ArrowsMoveHorizontalOutlineLogo";

export const ArrowsMoveHorizontalOutlineLogoMetadata = {
  id: "arrows-move-horizontal-outline",
  baseId: "arrows-move-horizontal-outline",
  variant: "default",
  name: "Arrows Move Horizontal Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowsMoveHorizontalOutlineLogo;
