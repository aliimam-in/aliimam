/**
 * Auto-generated logo component: Arrow Move Down Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowMoveDownOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowMoveDownOutlineLogo = React.forwardRef<SVGSVGElement, ArrowMoveDownOutlineLogoProps>(
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
      <path d="M12 11v10" />
  <path d="M9 18l3 3l3 -3" />
  <path d="M10 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    </svg>
  )
);

ArrowMoveDownOutlineLogo.displayName = "ArrowMoveDownOutlineLogo";

export const ArrowMoveDownOutlineLogoMetadata = {
  id: "arrow-move-down-outline",
  baseId: "arrow-move-down-outline",
  variant: "default",
  name: "Arrow Move Down Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowMoveDownOutlineLogo;
