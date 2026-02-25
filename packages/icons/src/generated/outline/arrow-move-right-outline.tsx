/**
 * Auto-generated logo component: Arrow Move Right Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowMoveRightOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowMoveRightOutlineLogo = React.forwardRef<SVGSVGElement, ArrowMoveRightOutlineLogoProps>(
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
      <path d="M11 12h10" />
  <path d="M18 9l3 3l-3 3" />
  <path d="M7 12a2 2 0 1 1 -4 0a2 2 0 0 1 4 0" />
    </svg>
  )
);

ArrowMoveRightOutlineLogo.displayName = "ArrowMoveRightOutlineLogo";

export const ArrowMoveRightOutlineLogoMetadata = {
  id: "arrow-move-right-outline",
  baseId: "arrow-move-right-outline",
  variant: "default",
  name: "Arrow Move Right Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowMoveRightOutlineLogo;
