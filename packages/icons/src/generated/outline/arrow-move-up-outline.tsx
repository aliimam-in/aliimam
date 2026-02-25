/**
 * Auto-generated logo component: Arrow Move Up Outline (default)
 * Category: outline
 * Do not edit manually
 */

'use client';
import React from 'react';

export interface ArrowMoveUpOutlineLogoProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
  strokeWidth?: number;
}

export const ArrowMoveUpOutlineLogo = React.forwardRef<SVGSVGElement, ArrowMoveUpOutlineLogoProps>(
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
      <path d="M12 13v-10" />
  <path d="M9 6l3 -3l3 3" />
  <path d="M12 17a2 2 0 1 1 0 4a2 2 0 0 1 0 -4" />
    </svg>
  )
);

ArrowMoveUpOutlineLogo.displayName = "ArrowMoveUpOutlineLogo";

export const ArrowMoveUpOutlineLogoMetadata = {
  id: "arrow-move-up-outline",
  baseId: "arrow-move-up-outline",
  variant: "default",
  name: "Arrow Move Up Outline",
  category: "outline",
  tags: [],
  viewBox: "0 0 24 24",
} as const;

export default ArrowMoveUpOutlineLogo;
